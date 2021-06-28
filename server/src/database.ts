import mongoose from "mongoose";
import { environments } from "./environments/environments";

export default async () => {
  await mongoose.connect(environments.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("Database is connected");
};
