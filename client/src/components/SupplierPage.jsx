import React from 'react'
import SupplierModal from './SupplierModal';
import Masthead from '../shared/Masthead.jsx'
import axios from 'axios';
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
class SupplierPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSupplier: {},
      toggle: false,
      suppliers: []
    }
    this.selectSupplier = this.selectSupplier.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getSuppliers = this.getSuppliers.bind(this);
  }

  componentDidMount() {
    // this.getFAQs()
    this.getSuppliers()
  }

  getSuppliers() {
    axios.get('/suppliers')
      .then(results => {
        console.log('GET SUPPLIERS', results.data)
        this.setState({
          suppliers: results.data
        })
      })
      .catch(err => {
        console.log(err);
      })
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
    console.log("this.state.suppliers", this.state.suppliers)
    return (
      <div>
      <Masthead />
      <SupplierContainer>
        <YellowSeperator>
          <Header>MEET OUR TEAM!</Header>
          <SubHeader>
            PRIMAL HEALTH is proud to collaborate with all of our purveyors!  These amazing artisans in their own crafts operate in sustainable, biodynamic practices.  Not only do they share their delicious and exceptional products with all of us, their holistic practices promote environmental rejuvanation, low waste policies and inclusive ecological preservation.
          </SubHeader>
        </YellowSeperator>

        <LiveFeed>
          <Link to="/vendor-videos" style={{ textDecoration: 'none' , color: '#264654' }}>Live feed from our suppliers!</Link>
        </LiveFeed>

        <OneSupplierContainer>
        {this.state.suppliers.map((supplier, i) => (
          <div className='supplier' key={i} onClick={() => this.selectSupplier(supplier)}>
            <img className='logo-image' src={supplier.logo_url}></img>
            <OneSupplierText>{supplier.supplier_name}</OneSupplierText>
          </div>
        ))}
        </OneSupplierContainer>

        <span className='supplier-modal-container'>
          {this.state.toggle
            ? <SupplierModal supplier={this.state.selectedSupplier} closeModal={this.closeModal}/>
            : null
          }
        </span>
      </SupplierContainer>
      <YellowSeperator></YellowSeperator>
      </div>
    )
  }
}

const SupplierContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;
`
const YellowSeperator = Styled.div`
  width: 100%;
  height: 160px;
  background-color: #FFE5A4;
`
const Header = Styled.div`
  text-align: center;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  font-family: 'Lato';
  color: #264654;
  margin-top: 35px;
  color: #264654
`
const SubHeader = Styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  justify-content: center;
  width: 50%;
  margin: auto;
  color: #264654
`
const OneSupplierContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`
const OneSupplierText = Styled.div`
  font-size: 24px;
  font-family: 'Quicksand'
`
const LiveFeed = Styled.button`
  font-size: 24px;
  margin-top: 50px;
  width: 315px;
`
export default SupplierPage;