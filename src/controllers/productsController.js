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

export async function addToCart(req, res) {
  const product = req.body;
  const user = res.locals.user;

  try {
    const hasCart = await db.collection("carts").findOne({ userId: user._id });
    if (hasCart) {
      await db
        .collection("carts")
        .updateOne({ userId: user._id }, { $push: { cart: product } });
      return res.sendStatus(201);
    }
    await db
      .collection("carts")
      .insertOne({ userId: user._id, cart: [product] });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
}

export async function getCart(req, res) {
  const user = res.locals.user;

  try {
    res.send(user.cart);
  } catch (error) {
    console.log(error);
  }
}
