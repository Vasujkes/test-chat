import express from "express";
import { MessageModel } from "../models";
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
      .populate(["dialog"])
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
      .then((obj) => {
        obj.populate("dialog", (err, message) => {
          const dialogId: any = message.dialog;
          if (err) {
            return res.status(404).json({
              message: "Messages not found",
            });
          }
          res.json(message);

          this.io.on("connection", function (socket) {
            socket.on("room", function (room) {
              socket.join(room);
            });
          });
          this.io.in(dialogId._id).emit("SERVER:NEW_MESSAGE", message);
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
