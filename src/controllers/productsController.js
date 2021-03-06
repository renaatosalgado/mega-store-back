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
    await db.collection("carts").insertOne({
      userId: user._id,
      cart: [product],
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
}

export async function getCart(req, res) {
  const user = res.locals.user;

  try {
    const userCart = await db.collection("carts").findOne({ userId: user._id });

    res.send(userCart.cart);
  } catch (error) {
    console.log(error);
  }
}

export async function updateItemQuantity(req, res) {
  const user = res.locals.user;
  const { productId, newQuantity } = req.body;

  try {
    await db
      .collection("carts")
      .updateMany(
        { userId: user._id },
        { $set: { "cart.$[item].quantity": newQuantity } },
        { arrayFilters: [{ "item._id": productId }] }
      );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItemFromCart(req, res) {
  const user = res.locals.user;
  const { productId } = req.params;

  try {
    db.collection("carts")
      .updateMany({ userId: user._id }, { $pull: { cart: { _id: productId } } })
      .then(res.sendStatus(200));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCart(req, res) {
  const user = res.locals.user;

  try {
    db.collection("carts").deleteOne({ userId: user._id });

    res.sendStatus(200);
  } catch (error) {
    res.send(error).status(500);
  }
}
