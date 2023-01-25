const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Route imports
const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const ticket = require('./routes/ticketRoutes');

app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", user);
app.use("/api/v1", ticket);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;