import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IUser>("users", UserSchema);
