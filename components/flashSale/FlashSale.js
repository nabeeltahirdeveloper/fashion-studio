import Image from 'next/image'
import React from 'react'
import viewAll from "../../assets/images/viewAll.png"
import FlashProductCard from '../flashProductCard/FlashProductCard'
import flashProductData from "../../constants/FlashProducts.json"
import localStyle from "./FlashSaleStyle"
export default function FlashSale() {
    return (
        <div>
            <div className="header" style={localStyle?.container}>
                <div style={localStyle?.subContainer}>

                    <div>

                        <h3 style={localStyle?.saleHeading}>
                            Flash Sale
                        </h3>
                        <p style={localStyle?.saleText}>
                            Ending In
                        </p>
                    </div>
                    <div style={localStyle?.saleTimer}>
                        <div className="day" style={localStyle?.timeContainer}>
                            <div style={localStyle?.timer}>

                                <p>00</p>
                            </div>
                            <p>Days</p>
                        </div>
                        <div className="hour">
                            <div style={localStyle?.timer}>

                                <p>00</p>
                            </div>
                            <p>Hrs</p>
                        </div>
                        <div className="minute">
                            <div style={localStyle?.timer}>

                                <p>00</p>
                            </div>
                            <p>Min</p>
                        </div>
                        <div className="second">
                            <div style={localStyle?.timer}>

                                <p>00</p>
                            </div>
                            <p>Sec</p>
                        </div>

                    </div>
                </div>
                <div style={localStyle?.seeAllContainer}>
                    <h4>See All</h4>
                    <Image
                        src={viewAll}
                        alt="view all"
                        style={localStyle?.seeAllIcon}
                    />
                </div>
            </div>
            <div className="body">
                <FlashProductCard data={flashProductData} />
            </div>
        </div>
    )
}
