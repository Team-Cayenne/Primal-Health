const express = require("express");
const axios = require("axios");
const config = require("../config.js");
const path = require("path");
const app = express();
const PORT = 3000;
const { getMeals, getRecipeSteps, getRecipeImages, getNutritional } = require ("../helpers/Spoonacular")
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

// !Cheryl Beginning
app.post('/mealchoice', async (req, res) => {
  console.log("params---->", req.body)
  let type = req.body.type;
  try {
    const results = await getMeals({type})
    console.log('results------results', results)
      res.status(200).send(results)
  } catch(err) {
    res.status(400).send("ERROR FROM SPOONACULAR GETTING MEALS SERVER")
  }
})

app.post('/recipecard', async (req, res) => {
  console.log("params---->", req.body)
  let id = req.body.id;
  try {
    const results = await getRecipeSteps({id})
    const images = await getRecipeImages({id})
    console.log('results------results', results)
      res.status(200).send({results, images})
  } catch(err) {
    res.status(400).send("ERROR FROM SPOONACULAR GETTING RECIPE CARD & IMAGE SERVER")
  }
})

app.post('/nutritionalinfo', async (req, res) => {
  console.log("params---->", req.body)
  let id = req.body.id;
  try {
    const results = await getNutritional({id})
    console.log('results------results', results)
      res.status(200).send(results)
  } catch(err) {
    res.status(400).send("ERROR FROM SPOONACULAR GETTING NUTRITIONAL INFO SERVER")
  }
})


// !Cheryl End

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
