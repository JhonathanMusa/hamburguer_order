import express from "express";
import orderRouter from "./routers/orderRouter.js";
import Mongoose from "mongoose";
import { MONGOURI } from "./keys.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api", orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
