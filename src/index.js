const express = require('express');
const createError = require('http-errors');

// Importing routes
const RootRouter = require('./routes/root');

// Defining port
const PORT = 3000;

// Creating a express application
const app = express();

// Adding middlewares for parse incoming data from  requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
app.use(RootRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    code: statusCode,
    message: err.message,
  })
});

// Mounting the app on specific port
app.listen(PORT, () => {
  console.log(`Express API is listening on port ${PORT}`);
});
