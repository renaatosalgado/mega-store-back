# MegaStore

A hole e-commerce application to sell stuff! The client can search for products and buy them as you they wish, or simply save for later.

Try it out now at https://mega-store.vercel.app

## About

This is an web application with which lots of people can search for and buy almost anything. Below are the implemented features:

- Sign Up
- Login
- List all products
- List each department
- Add itens to the cart
- Checkout from cart
- See all completed orders

By using this app any user can sell whatever you like to.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/dayjs%20-%2320232a.svg?&style=for-the-badge&color=orange'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/bcrypt%20-%2320232a.svg?&style=for-the-badge&color=green'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express%20-%2320232a.svg?&style=for-the-badge&color=critical'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/joi%20-%2320232a.svg?&style=for-the-badge&color=ff69b4'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/mongoDB%20-%2320232a.svg?&style=for-the-badge&color=success'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/uuid%20-%2320232a.svg?&style=for-the-badge&color=blue'>
</p>

## How to run

1. Clone this repository
2. Clone the back-end repository at https://github.com/renaatosalgado/mega-store-front
3. Follow instructions to run back-end at https://github.com/renaatosalgado/mega-store-front
4. Install dependencies
```bash
npm i
```
5. You must create a root file named ".env" containing the environment variables MONGO_URI and PORT, that contains the DB connection string and the PORT do run the server
```bash
MONGO_URI="connection string to the DB"
PORT=local port number
```
6. Run the back-end while delevoping with
```bash
npm run dev
```
7. Finally you can really start the application by running
```bash
npm start
```
