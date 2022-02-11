import { ObjectId } from "mongodb";
import db from "../db.js";

export async function singleProduct(req, res) {
  const { productId } = req.params;

  try {
    const product = await db
      .collection("products")
      .findOne({ _id: ObjectId(productId) });

    if (!product) return res.sendStatus(404);

    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
