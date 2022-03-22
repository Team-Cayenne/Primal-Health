import React, { useState, useContext } from 'react';
import axios from 'axios';
import Nutritional from './Nutritional.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"
import { AppContext } from "../context.js";

const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [selectMeals, setSelectMeals] = useState([]);
  const [id, setId] = useState(0)

  return (
    <AppContext.Provider value= {{
      meals, setMeals,
      selectMeals, setSelectMeals,
      id, setId
      }}>
      {props.children}
    </AppContext.Provider>
  )
}



const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
           <Route path="/videos" element={<VideoDetail />} />
           <Route path="/" element={<Nutritional />}>
           <Route index element={<SupplierPage />} />
           {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
// const App = () => {
//   return (
//     <div>
//     <div>Primal Health Test</div>
//     <Nutritional/>
//     <VideoDetail/>
//     <SupplierPage/>
//     </div>
//   )
// }

export default App;