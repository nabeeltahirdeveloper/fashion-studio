import Image from 'next/image'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import productImage from "../../assets/images/productImage.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import localStyle from "./itemPageStyle"
import flashProductData from "../../constants/FlashProducts.json"
import ProductCard from '../../components/productCard/ProductCard'

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
          <h3 style={localStyle.itemHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h3>
          <div className="price" style={localStyle.priceContainer}>

          <p style={localStyle.originalPrice}>
            RS: 1400
          </p>
          <p style={localStyle.oldPrice}>RS: 1800</p>
          <p style={localStyle.discount}>54% off</p>
          </div>
          <div className="buttonContainer" style={localStyle.countButtonContainer}>
            <div className="lessCount" >
              <button style={localStyle.countChangeButton}>-</button>
            </div>
            <div className="count">
              <p style={localStyle.countButton}>1</p>
            </div>
            <div className="moreCount">
              <button style={localStyle.countChangeButton}>+</button>
            </div>
          </div>
          <div className="buyContainer" style={localStyle.buyContainer}>
            <button style={localStyle.buyNowButton}>Buy Now</button>
            <button style={localStyle.addToCartButton}>Add to Cart</button>
          </div>
          <div className="releventItems">
            <h3 style={localStyle.releventItemsHeading}>Relevent Items</h3>
            <div className="items" style={localStyle.releventItemsContainer}>
            {
              flashProductData.slice(0,5).map((item, index) => {
                console.log(item)
                return(

                  <ProductCard
                  key={index}
                  data={item}
                  cardWidth={144}
                  cardHeight={180}
                  imageHeight={145}
                  />
                )

              })
            }
            <IoIosArrowForward style={localStyle.nextButtonIcon}/>
            
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
