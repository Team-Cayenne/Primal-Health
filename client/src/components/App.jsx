import React from 'react';
import Nutritional from './Nutritional.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import ConfirmationPage from './ConfirmationPage.jsx';
import TrackingPage from './TrackingPage.jsx';
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"
import axios from 'axios';

// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* <ConfirmationPage/> */}
//       <Routes>
//           <Route path="/blogs" element={<VideoDetail />} />
//           <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//           <Route index element={<ConfirmationPage />}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}

//     this.get = this.get.bind(this);
//     this.post = this.post.bind(this);
//   }

//   componentDidMount() {
//     // this.get()
//     this.post()
//   }

//   get() {
//     axios.get('/api')
//     .then(results => {
//       console.log('results:', results)
//     })

//   }

//   post() {
//     axios.post('/api')
//     .then(results => {
//       console.log('results:', results)
//     })

//   }

//   render() {
//     return (
//       <div>Primal Health Test</div>
//     )
//   }

// }
const App = () => {
  return (
    <div>
    {/* <div>Primal Health Test</div> */}
    {/* <ConfirmationPage/> */}
    <TrackingPage/>
    {/* <Nutritional/>
    <VideoDetail/>
    <SupplierPage/> */}
    </div>
  )
}

export default App;