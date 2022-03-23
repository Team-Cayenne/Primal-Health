import React from 'react'
import Masthead from '../shared/Masthead.jsx'
import {Link}  from "react-router-dom";

const UserOrderTracking = (props) => {

  const orders = [
    {
      order: "12345566",
      tracking: 'saldkfja;329030234',
      meal: ['chicken', 'veggie', 'fish'],
      plan: 'meal plan',
      quantity: 2
    },
    {
      order: "093840934805",
      tracking: 'psaodfja;skdfj',
      meal: ['spicy shrimp', 'tortillas'],
      plan: 'meal plan',
      quantity: 1
    }
  ];

  return (
    <div>
      <Masthead />
      {/* {props.orders.map((order, i) => (create order div))} */}
      <button>
      <Link to="/user-profile">BACK</Link>
      </button>
      {orders.map((order, i) => (
        <div className='order-history' key={i}>
          <div className='order-key'>
            <div>Order #:</div>
            <div>Tracking Details:</div>
            <div>Order Details:</div>
          </div>
          <div className='order-value'>
            <div>{order.order}</div>
            <div>{order.tracking}</div>
            <div>
              <div>{order.plan}</div>
              <div>Quantity {order.quantity}</div>
              <div>Selected Meals:</div>
              {order.meal.map((meal, j) => (
                <div key={j}>{meal}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}

export default UserOrderTracking