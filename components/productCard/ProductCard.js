import React from 'react'
import localStyle from "./ProductCardStyle"
import Image from 'next/image'
export default function ProductCard(props) {
    return (
        <div className="cardContainer" style={localStyle.cardContainer}>
            <div className="cardImage" style={localStyle.imageContainer}>
                <Image
                    src={props?.data?.imagePath}
                    alt="product image"
                    width={200}
                    height={200}
                    // quality={200}
                    style={localStyle.cardImage}
                />
            </div>
            <div className="cardTitle">
                <h4 style={localStyle.cardTitle}>{props?.data?.name}</h4>
            </div>
            {props?.data?.price && <div className="newPrice">
                <p style={localStyle.newPrice}>Rs {props?.data?.price}</p>
            </div>}
            {props?.flashSale ? (
                <div className="oldPrice" style={localStyle.oldPriceContainer}>
                    <p className='strikethrough' style={localStyle.oldPrice}>Rs {props?.data?.oldPrice}</p>
                    <span className="discount" style={localStyle.discount}>{props?.data?.discount}</span>
                </div>
            ) : null}
        </div>
    )
}
