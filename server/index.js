const express = require("express");
const controller = require('../controllers/todos.js');

const path = require("path");
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());


// User routes
app.post('/users', controller.addUser);

app.get('/users', controller.getUsers);


// Supplier routes
app.post('/suppliers', controller.addSupplier);

app.get('/suppliers', controller.getSuppliers);


// FAQ routes
app.post('/faqs', controller.addFAQ);

app.get('/faqs', controller.getFAQs);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
