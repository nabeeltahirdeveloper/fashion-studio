import React from 'react'
import PopularProductData from "../../constants/PopularProducts.json"
import PopularProductCard from '../popularProductCard/PopularProductCard'
import localStyle from "./PopularProductsStyle"
import viewAll from "../../assets/images/viewAll.png"
import Image from "next/image"
export default function PopularProducts() {
  return (
    <div>
      <div style={localStyle?.container}>

        <h3>Popular Products</h3>
        <div style={localStyle?.seeAllContainer}>
          <h4>See All</h4>
          <Image
            src={viewAll}
            style={localStyle?.seeAllIcon}
          />
        </div>
      </div>
      <div>

        {
          <PopularProductCard
            data={PopularProductData}
          />
        }
      </div>
    </div>
  )
}
