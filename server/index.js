const express = require("express");
const axios = require("axios");
// const config = require("../config.js");
const path = require("path");
const app = express();
const PORT = 4000;
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

// https://us-central1-primal-health.cloudfunctions.net/api


app.get("/api", (req, res) => {
  axios
    .get(
      `https://us-central1-primal-health.cloudfunctions.net/api`
    )
    .then((results) => {
      console.log('results:', results)
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.post("/api", (req, res) => {
  let data = {name: 'austin'}
  axios
    .post(
      `https://us-central1-primal-health.cloudfunctions.net/api`, data
    )
    .then((results) => {
      console.log('results:', results)
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
