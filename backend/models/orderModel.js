import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ordersModel = new Schema(
  {
    product: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", ordersModel);
export default Order;
