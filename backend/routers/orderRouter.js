import { Router } from "express";
import Order from "../models/orderModel.js";

const orderRouter = Router();

orderRouter.get("/orders", async (req, res) => {
  try {
    const order = await Order.find({});
    res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({
      message: "Data not found",
      error,
    });
  }
});

orderRouter.post("/new-order", async (req, res) => {
  const body = req.body;
  try {
    const order = await Order.create({ body });
    res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({
      message: "An error Ocurred",
      error,
    });
  }
});

export default orderRouter;
