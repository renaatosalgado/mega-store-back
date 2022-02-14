import db from "..db/.js";

export async function addUserOrder(req, res) {
    const order = req.body;
    const { user } = res.locals;

    try {
        const hasOrders = await db.collection("orders").findOne({ userId: user._id });

        if (hasOrders) {
            await db.collection("orders").updateOne({ userid: user._id }, { $push: { orders: order } });

            return res.sendStatus(201);
        }

        await db.collection("orders").insertOne({ userId: user._id, orders: [order] });

        res.sendStatus(201);
    } catch (error) {
        res.send(error).status(500);
    }
}

export async function getOrders(req, res) {
    const { user } = res.locals;

    try {
        const userOrder = await db.collection("orders").findOne({ userId: user._id });

        res.send(userOrder);
    } catch (error) {
        res.send(error).status(500);
    }
}