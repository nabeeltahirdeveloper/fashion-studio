import Image from 'next/image'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import localStyle from "./FlashSaleProductCardStyle"

export default function FlashProductCard({data}) {
  return (
    <div style={{display: "flex", justifyContent:"space-around", width:"100%"}}>

        {
            data.map((item, index)=>{
                return(
                    <ProductCard
                    key={index}
                    data={item}
                    flashSale={true}
                    />
                )
            })
        }
    </div>
  )
}
