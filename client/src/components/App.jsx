import React from "react";
// import Nutritional from "./Nutritional.jsx";
// import PersonalizeYourPlan from "./PersonalizeYourPlan.jsx";
// import VideoDetail from "./VideoDetail.jsx";
// import SupplierPage from "./SupplierPage.jsx";
// import Masthead from "../shared/Masthead.jsx";
// import SelectMeals from "./SelectMeals.jsx";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LoginPage from './LoginPage.jsx';
// import firebase from '../firebase/firebase.js';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/blogs" element={<VideoDetail />} />
//           <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );

// import axios from "axios";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: true
//     };

//     // this.get = this.get.bind(this);
//     // this.post = this.post.bind(this);
//   }

//   componentDidMount() {
//     this.getFAQs();
//     this.getSuppliers();
//   }

//   getFAQs() {
//     axios.get("/faqs").then((results) => {
//       console.log("get FAQs results:", results);
//     });
//   }

//   getSuppliers() {
//     axios
//       .get("/suppliers")
//       .then((results) => {
//         console.log("get Suppliers results:", results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // post() {
//   //   axios.post('/faqs')
//   //   .then(results => {
//   //     console.log('results:', results)
//   //   })

//   // }

//   render() {
//     return (
//       <div data-testid="App-1">
//         <div>Primal Health Test</div>
//         {this.state.loaded ? (
//           <div>
//             {/* <LoginPage /> */}
//             test
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }
const App = () => {
  return <div data-testid="App-1">test</div>;
};

export default App;
