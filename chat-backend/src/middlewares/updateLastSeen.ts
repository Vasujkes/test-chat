import { UserModel } from "../models";
import express from "express";

export default (
  req: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.updateOne(
    { _id: req.user?._id },
    {
      $set: {
        last_seen: new Date(),
      },
    }
  ).exec();
  next();
};
