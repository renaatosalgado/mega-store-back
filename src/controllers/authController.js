import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../db.js";

export async function signUp(req, res) {
  const user = req.body;

  try {
    const hasEmail = await db
      .collection("users")
      .findOne({ email: user.email });

    if (hasEmail) return res.sendStatus(409);

    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({ ...user, password: passwordHash });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = uuid();

      await db
        .collection("sessions")
        .insertOne({ token: token, userId: user._id });
      res.send({ token: token, name: user.name });
    } else res.sendStatus(401);
  } catch (error) {
    res.status(500).send(error);
  }
}
