import React from "react";

const SupplierModal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div className="profile-modal-background">
      <div className="supplier-modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <div className="supplier-modal-contents">
          <h2 className="supplier-modal-text">
            {props.supplier.supplier_name}
          </h2>
          <br></br>
          <div>
            <img
              className="supplier-modal-image"
              src={props.supplier.logo_url}
            ></img>
          </div>
          <br></br>
          <div className="supplier-modal-text">
            {props.supplier.supplier_description}
          </div>
          <br></br>
          <div>
            <img
              className="supplier-modal-image"
              src={props.supplier.food_item_url}
            ></img>
          </div>
          <br></br>
          <div className="supplier-modal-text">
            Available for individual sale during checkout!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierModal;
