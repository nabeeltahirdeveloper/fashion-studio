import Image from 'next/image'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import productImage from "../../assets/images/productImage.png"
export default function index() {
  return (
    <div>
      <Header/>
      <div className='mainContainer'>
        <div className="leftContainer">
          <div className="mainImage">
            <Image
            src={productImage}
            alt="product Image"
            />
          </div>
          <div className="otherImages">
            
          </div>
        </div>
        <div className="rightContainer">

        </div>
      </div>
      <Footer/>
    </div>
  )
}
