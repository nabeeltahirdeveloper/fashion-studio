import Image from 'next/image'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import productImage from "../../assets/images/productImage.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import localStyle from "./itemPageStyle"
export default function index() {
  return (
    <div>
      <Header/>
      <div className='mainContainer' style={localStyle.mainContainer}>
        <div className="leftContainer" style={localStyle.leftContainer}>
          <div className="mainImage">
            <Image
            src={productImage}
            alt="product Image"
            style={localStyle.productMainImage}
            />
          </div>
          <div className="otherImages" style={localStyle.bottomContainer}>
            <BsFillArrowLeftCircleFill style={localStyle.arrowIcon} />
            <Image
            src={productImage}
            alt="product Image"
            style={localStyle.bottomImages}
            />
            <Image
            src={productImage}
            alt="product Image"
            style={localStyle.bottomImages}
            />
            <Image
            src={productImage}
            alt="product Image"
            style={localStyle.bottomImages}
            />
            <BsFillArrowRightCircleFill style={localStyle.arrowIcon} />
          </div>
        </div>
        <div className="rightContainer" style={localStyle.rightContainer}>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
