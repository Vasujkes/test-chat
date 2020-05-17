import express from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import socket from "socket.io";

import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWToken } from "../utils";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

class UserController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }
  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json(user);
    });
  };

  getMe = (req: express.Request, res: express.Response) => {
    const id: string = req.user?._id;
    UserModel.findById(id, (err, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json(user);
    });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash: any = req.query.hash;

    if (!hash) {
      return res.status(422).json({ errors: "Invalid hash" });
    }

    UserModel.findOne({ confirmed_hash: hash }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          status: "error",
          message: "Hash not found",
        });
      }

      user.confirmed = true;
      user.save((err) => {
        if (err) {
          return res.status(404).json({
            status: "error",
            message: err,
          });
        }

        res.json({
          status: "success",
          message: "Акаунт успешно подтвержден!",
        });
      });
    });
  };

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err, user: IUser) => {
      if (err || !user) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }
      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWToken(user);
        res.json({
          status: "success",
          token,
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "Incorrect password or email",
        });
      }
    });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);

    user
      .save()
      .then((data: IUser) => {
        res.json({
          status: "success",
          data,
        });
      })
      .catch((reason) => {
        res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        if (user) {
          res.json({
            message: `User ${user?.fullname} deleted`,
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
export default UserController;
