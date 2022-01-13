// import express from 'express';
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3456;

app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});
