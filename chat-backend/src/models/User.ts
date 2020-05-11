import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { generatePasswordHash } from "../utils";

export interface IUser extends Document {
  email?: string;
  fullname?: string;
  password: string;
  confirmed?: boolean;
  avatar?: string;
  confirmed_hash?: string;
  last_seen?: Date;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email adress is required",
      validate: [isEmail, "invalid email adress"],
      index: { unique: true },
    },
    fullname: { type: String, required: "Fullname  is required" },
    password: { type: String, required: "Password is required" },
    confirmed: { type: Boolean, default: false },
    avatar: String,
    confirmed_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUser>("save", function (next) {
  const user: IUser = this;

  if (!user.isModified("password")) return next();

  generatePasswordHash(user.password)
    .then((hash) => {
      user.password = String(hash);
      next();
    })
    .catch((err) => {
      next(err);
    });
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;