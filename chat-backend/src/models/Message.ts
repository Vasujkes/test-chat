import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  text: {
    type: string;
    require: true;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  unread: {
    type: boolean;
    default: boolean;
  };
}

const MessageShema = new Schema(
  {
    text: { type: String, required: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    unread: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageShema);

export default MessageModel;
