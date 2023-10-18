const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { connection } = require("./db");
const { productRouter } = require("./Controller/ProductRouter");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/search", async (req, res) => {
  const { text } = req.body;

  try {
    let response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${text}`
    );

    res.status(200).send(response.data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use("/product", productRouter);

app.get("/api/singleproduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.apiKey}`
    );

    res.status(200).send(response.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
    console.log("mongoDB not connected");
  }
  console.log(`server is running on port ${process.env.port}`);
});
