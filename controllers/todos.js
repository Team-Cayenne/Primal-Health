const firebase = require('../database');
// const firestore = firebase.firestore();



// Users
// Postman post build
// {
//   "firstName": "",
//   "lastName": "",
//   "email": "",
//   "address": "",
//   "creditCardInfo": 1234,
//   "username": "",
//   "subscriptionPrice": 100,
//   "mealsPerWeek": 5,
//   "mealHeadCount": 2,
//   "orders": [
//       {
//           "trackingNumber": 1234,
//           "confirmationNumber": 1234,
//           "cost": 100,
//           "reported": false,
//           "orderDate": "",
//           "cart": {
//               "recipes": ["recipe1", "recipe2", "recipe3", "recipe4", "recipe5"],
//               "ingredients": [
//                   {"name": "",
//                   "price": 0
//                   }
//               ]
//           }
//       }
//   ]
// }



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
          // console.log('suppliers data: ', data)
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
    // let data = newFAQ;
    // data.id = doc.id;
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

// Example Todo
// const getTodos = (req, res) => {
//   firebase.collection('todos').get()
//   .then((data) => {
//     let todos = [];
//     data.forEach(doc => {
//       todos.push({
//           todoId: doc.id,
//           title: doc.data().title,
//           body: doc.data().body,
//           createdAt: doc.data().createdAt,
//       })
//     })
//     res.send(todos);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.send(err);
//   });
// }



module.exports = {
  getSuppliers: getSuppliers,
  addSupplier: addSupplier,
  addFAQ: addFAQ,
  getFAQs: getFAQs
}