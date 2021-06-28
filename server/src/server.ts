import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import ApiRouter from "./routes/api.routes";

const app = express();

//Configuration of server

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

//Managing routes of server

app.use("/api", ApiRouter);

//Start server

app.listen(8000, () => {
  console.log("Serve on port 8000");
});

export default app;
