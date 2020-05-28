import express from "express";
import { DialogModel, MessageModel } from "../models";
import { IDialog } from "../models/Dialog";
import socket from "socket.io";

class DialogController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    const authorId = req.user?._id;

    DialogModel.find({
      /* author: authorId */ $or: [{ author: authorId }, { partner: authorId }],
    })
      .populate(["author", "partner"])
      .populate({
        path: "lastMessage",
        populate: {
          path: "user",
        },
      })
      .exec(function (err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found",
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      author: req.user?._id,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);

    dialog
      .save()
      .then((dialogObj: IDialog) => {
        const message = new MessageModel({
          text: req.body.text,
          user: req.body.author,
          dialog: dialogObj._id,
        });

        message
          .save()
          .then(() => {
            dialogObj.lastMessage = message._id;
            dialogObj.save().then(() => {
              res.json(dialogObj);
              this.io.emit("SERVER:DIALOG_CRATED", {
                ...postData,
                dialog: dialogObj,
              });
            });
          })
          .catch((reason) => {
            res.json(reason);
          });
      })
      .catch((reason) => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then((dialog) => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`,
          });
        } else {
          res.json({
            message: `User not found`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`,
        });
      });
  };
}
export default DialogController;
