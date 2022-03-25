import React from "react";
import Masthead from "../shared/Masthead.jsx";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div>
        <Masthead />
        <div className="user-orders">
          <h2 className="user-orders-title">Your Order History</h2>
          <div style={{textAlign: "center"}}>
            <button className="update-user-button">
              <Link to="/user-profile">BACK</Link>
            </button>
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
      </div>
    );
  }
}

export default UserOrderTracking;
