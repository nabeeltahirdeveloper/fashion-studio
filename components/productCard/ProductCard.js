import React from 'react'
import localStyle from "./ProductCardStyle"
import Image from 'next/image'
export default function ProductCard(props) {
    return (
        <div className="cardContainer" style={{...localStyle.cardContainer, width:props.cardWidth, height:props.cardHeight}}>
            <div className="cardImage" style={{...localStyle.imageContainer, height: props.imageHeight}}>
                <Image
                    src={props?.data?.imagePath}
                    alt="product image"
                    width={props.cardWidth || 200}
                    height={props.cardHeight || 200}
                    // quality={200}
                    style={{...localStyle.cardImage, width:props.cardWidth, height:props.imageHeight}}
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
