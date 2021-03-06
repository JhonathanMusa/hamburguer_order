import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ordersModel = new Schema(
  {
    product: {
      type: String,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", ordersModel);
export default Order;
