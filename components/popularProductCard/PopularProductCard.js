import React from 'react'
import ProductCard from '../productCard/ProductCard'

export default function PopularProductCard({data}) {
  return (
    <div style={{display:"flex", justifyContent:"space-around", widows:"100%"}}>
        {
            data.map((item, index)=>{
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
  )
}
