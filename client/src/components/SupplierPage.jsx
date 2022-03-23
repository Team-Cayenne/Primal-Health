import React from 'react'
import SupplierModal from './SupplierModal';

class SupplierPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSupplier: {},
      toggle: false
    }
    this.selectSupplier = this.selectSupplier.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  selectSupplier(supplier) {
    this.setState({
      selectedSupplier: supplier,
      toggle: true
    })
  }

  closeModal() {
    this.setState({
      toggle: false
    })
  }

  render() {
    return (
      <div>
        <h3>MEET OUR TEAM!</h3>
        <p>
          PRIMAL HEALTH is proud to collaborate with all of our purveyors!  These amazing artisans in their own crafts operate in sustainable, biodynamic practices.  Not only do they share their delicious and exceptional products with all of us, their holistic practices promote environmental rejuvanation, low waste policies and inclusive ecological preservation.
        </p>
        <br></br>
        {this.props.suppliers.map((supplier, i) => (
          <div className='supplier' key={i} onClick={() => this.selectSupplier(supplier)}>
            <img className='logo-image' src={supplier.logo_url}></img>
            <div>{supplier.supplier_name}</div>
          </div>
        ))}
        <span className='supplier-modal-container'>
          {this.state.toggle
            ? <SupplierModal supplier={this.state.selectedSupplier} closeModal={this.closeModal}/>
            : null
          }
        </span>
      </div>
    )
  }
}

export default SupplierPage;