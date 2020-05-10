import { UserModel } from "../models";
import express from "express";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.updateOne(
    { _id: "5eb454cc5d32e50d8499f098" },
    {
      $set: {
        last_seen: new Date(),
      },
    }
  )
    .exec()
  next();
};
