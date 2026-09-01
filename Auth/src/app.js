const express = require('express');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');

const app = express(); // This is the instance of server.
app.use(express.json()); // This is use for access data in req.body
app.use(cookieParser()); // This is also a middleware

app.use("/api/auth", authRoutes); // This is also like a middleware
app.use("/api/posts", postRoutes);

module.exports = app;
