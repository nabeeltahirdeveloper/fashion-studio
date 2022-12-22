import React from 'react'
import categoriesData from "../../constants/Categories.json"
import ProductCard from '../productCard/ProductCard'
import localStyle from './CategoriesSectionStyle'
import viewAll from "../../assets/images/viewAll.png"
import Image from 'next/image'
export default function CategoriesSection() {
  return (
    <div>
        <div style={localStyle?.container}>

        <h3>Categories</h3>
        <div style={localStyle?.seeAllContainer}>
                    <h4>See All</h4>
                    <Image
                        src={viewAll}
                        alt="view all"
                        style={localStyle?.seeAllIcon}
                    />
                </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-around", widows:"100%"}}>
        {
            categoriesData.map((item, index)=>{
                return(
                    <ProductCard
                    key={index}
                    data={item}
                    productCard={true}
                    />
                )
            })
        }
    </div>
    </div>
  )
}
