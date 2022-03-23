const express = require("express");

const controller = require('../controllers/todos.js');


const axios = require("axios");
const config = require("../config.js");

const path = require("path");
const app = express();
const PORT = 3000;
const { getMeals, getRecipeSteps, getRecipeImages, getNutritional } = require ("../helpers/Spoonacular")
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());



// User routes
app.post('/users', controller.addUser);

app.get('/users', controller.getUsers);

app.post('/suppliers', controller.addSupplier);

app.get('/suppliers', controller.getSuppliers);

app.post('/faqs', controller.addFAQ);

app.get('/faqs', controller.getFAQs);

// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
// });


// Supplier routes
// app.post('/suppliers', controller.addSupplier);

// app.get('/suppliers', controller.getSuppliers);

// FAQ routes
// app.post('/faqs', controller.addFAQ);

// app.get('/faqs', controller.getFAQs);



// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
// });

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
// https://us-central1-primal-health.cloudfunctions.net/api


app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
