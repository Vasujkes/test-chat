import express from "express";
import { MessageModel, DialogModel } from "../models";
import { IDialog } from "../models/Dialog";
import socket from "socket.io";

class MessageController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }
  index = (req: express.Request, res: express.Response) => {
    const dialogId: any = req.query.dialog;
    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user"])
      .exec(function (err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found",
          });
        }
        return res.json(messages);
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const userId = req.user?._id;
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: userId,
    };

    const message = new MessageModel(postData);

    message
      .save()
      .then((obj: any) => {
        obj.populate(["dialog", "user"], (err: any, message: any) => {
          const dialogId: any = postData.dialog;
          if (err) {
            return res.status(500).json({
              status: "error",
              message: err,
            });
          }

          DialogModel.findByIdAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            { upsert: true },
            (err) => {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err,
                });
              }
            }
          );

          res.json(message);

          this.io.on("connection", function (socket) {
            socket.join(dialogId);
          });
          this.io.in(dialogId).emit("SERVER:NEW_MESSAGE", message);
        });
      })
      .catch((reason) => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    MessageModel.findOneAndRemove({ _id: id })
      .then((message) => {
        if (message) {
          res.json({
            message: `Message deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Message not found`,
        });
      });
  };
}

export default MessageController;
