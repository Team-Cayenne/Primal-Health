const firebase = require('../database');


// Users
const addUser = (req, res) => {
  let password = req.body.password || '';
  let firstName = req.body.displayName || '';
  let user = {
    firstName: firstName,
    lastName: "",
    email: req.body.email,
    password: password,
    address: "",
    creditCardInfo: 1234,
    username: "",
    subscriptionPrice: 100,
    mealsPerWeek: 5,
    mealHeadCount: 2,
    orders: [
        {
            trackingNumber: 1234,
            confirmationNumber: 1234,
            cost: 100,
            reported: false,
            orderDate: "",
            cart: {
                recipes: ["recipe1", "recipe2", "recipe3", "recipe4", "recipe5"],
                ingredients: [
                    {quantity: 0,
                    name: "",
                    price: 0
                    }
                ]
            }
        }
    ],
    addToCart: {
      recipes: [
        "recipe1",
        "recipe2",
        "recipe3"
      ],
      ingredients: [
        {
          quantity: 0,
          name: "",
          price: 0
        }
      ]
    }
  }
  firebase.collection('users').add(user)
    .then((doc) => {
      res.send('record successfully saved');
    })
    .catch(err => {
      res.send(err);
    })
}

const getUsers = (req, res) => {
  firebase.collection('users').get()
    .then((data) => {
      let users = [];
      data.forEach(doc => {
        users.push({
          user_id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          address: doc.data().address,
          creditCardInfo: doc.data().creditCardInfo,
          username: doc.data().username,
          subscriptionPrice: doc.data().subscriptionPrice,
          mealsPerWeek: doc.data().mealsPerWeek,
          mealHeadCount: doc.data().mealHeadCount,
          orders: doc.data().orders,
          addToCart: doc.data().addToCart
        })
      })
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
}


// Suppliers
const addSupplier = (req, res) => {
  firebase.collection('suppliers').add(req.body)
    .then((doc) => {
      res.send('record successfully saved');
    })
    .catch(err => {
      res.send(err);
    })
}

const getSuppliers = (req, res) => {
  firebase.collection('suppliers').get()
    .then((data) => {
      let suppliers = [];
      data.forEach(doc => {
        suppliers.push({
          supplier_id: doc.id,
          supplier_name: doc.data().name,
          supplier_description: doc.data().description,
          logo_url: doc.data().logo_url,
          food_item: doc.data().food_item,
          food_item_url: doc.data().item_pic_url,
          food_item_price: doc.data().price,
          food_item_reviews: doc.data().item_reviews
        })
      })
      res.send(suppliers);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
}


// FAQs
const addFAQ = (req, res) => {
  let newFAQ = {
    question: req.body.question,
    answer: req.body.answer
  }
  firebase.collection('faqs').add(newFAQ)
    .then((doc) => {
      res.send('record successfully saved');
    })
    .catch(err => {
      res.send(err);
    })
}

const getFAQs = (req, res) => {
  firebase.collection('faqs').get()
    .then((data) => {
      let faqs = [];
      data.forEach(doc => {
        faqs.push({
          faqId: doc.id,
          question: doc.data().question,
          answer: doc.data().answer
        })
      })
      res.send(faqs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
}




module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  getSuppliers: getSuppliers,
  addSupplier: addSupplier,
  addFAQ: addFAQ,
  getFAQs: getFAQs
}