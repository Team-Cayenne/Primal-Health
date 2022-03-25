import React from "react";
import Masthead from "../shared/Masthead.jsx";
import { Link } from "react-router-dom";
import { Footer } from "./EnterShippingInfo.jsx";
import { SeperatorTitle, SeperatorBar } from "../styles/nutritionalPage/styles.js";
import { Button } from "./EnterShippingInfo.jsx";

const orders = [
  {
    order: "12345566",
    tracking: "34654654635429030234",
    meal: ["chicken", "veggie", "fish"],
    plan: "meal plan",
    quantity: 2,
  },
  {
    order: "093840934805",
    tracking: "34556432535465345435",
    meal: ["spicy shrimp", "tortillas"],
    plan: "meal plan",
    quantity: 1,
  },
];

class UserOrderTracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // return (
  //   <div>
  //     <Masthead />
  //     {/* {props.orders.map((order, i) => (create order div))} */}
  //     <button>
  //     <Link to="/user-profile">BACK</Link>
  //     </button>
  //     {orders.map((order, i) => (
  //       <div className='order-history' key={i}>
  //         <div className='order-key'>
  //           <div>Order #:</div>
  //           <div>Tracking Details:</div>
  //           <div>Order Details:</div>
  //         </div>
  //         <div className='order-value'>
  //           <div>{order.order}</div>
  //           <div>{order.tracking}</div>
  //           <div>
  //             <div>{order.plan}</div>
  //             <div>Quantity {order.quantity}</div>
  //             <div>Selected Meals:</div>
  //             {order.meal.map((meal, j) => (
  //               <div key={j}>{meal}</div>
  //             ))}

  render() {
    return (
      <div>
        <Masthead />
        <SeperatorBar> <SeperatorTitle>Your Order History</SeperatorTitle></SeperatorBar>
        <div className="user-orders">
          <div style={{textAlign: "center"}}>
            <Link to="/user-profile" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button style={{marginTop: '-5%'}}>BACK</Button></Link>
          </div>

          {orders.map((order, i) => (
            <div className="order-history" key={i}>
              <div className="order">
                <div className="order-key">
                  <div>Order #:</div>
                  <br />
                  <div>Tracking Number:</div>
                  <br />
                  <div>Order Plan:</div>
                  <br />
                  <div>Order Quantity:</div>
                  <br />
                  <div>Selected Meals:</div>
                  <br />
                </div>
                <div className="order-value">
                  <div>{order.order}</div>
                  <br />
                  <a href="">{order.tracking}</a>
                  <br />
                  <br />
                  <div>
                    <div>{order.plan}</div>
                    <br />
                    <div>{order.quantity}</div>
                    <br />
                    {order.meal.map((meal, j) => (
                      <li key={j}>{meal}</li>
                    ))}
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer style={{display: 'flex', marginTop: '50px'}}></Footer>
      </div>
    );
  }
}

export default UserOrderTracking;
