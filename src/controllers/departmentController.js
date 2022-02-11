import db from "../db.js";

export async function cellphonesGet(req, res) {
    try {
        const products = db.collection("products").find({ category: "celulares" });

        if (!products) {
            return res.sendStatus(404);
        }

        res.status(200).send(products);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
