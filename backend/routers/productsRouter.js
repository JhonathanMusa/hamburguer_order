import { Router } from "express";
const productRouter = Router();
import Product from "../models/productModel.js";
import dataMenu from "../dataMenu.js";

productRouter.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

productRouter.get("/seed", async (req, res) => {
  const createProduct = await Product.insertMany(dataMenu.products);
  res.send({ createProduct });
});

export default productRouter;
