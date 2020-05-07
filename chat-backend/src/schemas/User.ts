import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator/lib/isEmail";

export interface IUser extends Document {
  email: string;
  fullname: string;
  password: string;
  confirmed: boolean;
  avatar: string;
  confirmed_hash: string;
  last_seen: Date;
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
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;