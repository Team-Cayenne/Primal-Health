import React from 'react';

const SupplierModal = (props) => {

  const closeModal = () => {
    props.closeModal();
  }

  return (
    <div className='supplier-modal'>
      <span className='close-modal' onClick={closeModal}>&times;</span>
      <div>
        <img className='supplier-modal-image' src={props.supplier.logo_url}></img>
      </div>
      <br></br>
      <div>
        {props.supplier.supplier_name}
      </div>
      <br></br>
      <div>
        {props.supplier.supplier_description}
      </div>
      <br></br>
      <div>
        <img className='supplier-modal-image' src={props.supplier.food_item_url}></img>
      </div>
      <br></br>
      <div>
        Available for individual sale during checkout!
      </div>
    </div>
  )
}

export default SupplierModal;