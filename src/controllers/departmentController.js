import db from "../db.js";

export async function getCellphones(req, res) {

    try {
        const cellphones = await db.collection("products").find({ category: "celulares" }).toArray();

        if (!cellphones) {
            return res.sendStatus(404);
        }

        res.status(200).send(cellphones);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getGames(req, res) {
    try {
        const games = await db.collection("products").find({ category: "games" }).toArray();

        if (!games) {
            return res.sendStatus(404);
        }

        res.status(200).send(games);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getEletro(req, res) {
    try {
        const eletro = await db.collection("products").find({ category: "eletrodomesticos" }).toArray();

        if (!eletro) {
            return res.sendStatus(404);
        }

        res.status(200).send(eletro);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getBooks(req, res) {
    try {
        const books = await db.collection("products").find({ category: "livros" }).toArray();

        if (!books) {
            return res.sendStatus(404);
        }

        res.status(200).send(books);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getFashion(req, res) {
    try {
        const fashion = await db.collection("products").find({ category: "moda" }).toArray();

        if (!fashion) {
            return res.sendStatus(404);
        }

        res.status(200).send(fashion);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getHomeThings(req, res) {
    try {
        const home = await db.collection("products").find({ category: "casa" }).toArray();

        if (!home) {
            return res.sendStatus(404);
        }

        res.status(200).send(home);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}