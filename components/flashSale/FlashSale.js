import Image from 'next/image'
import React from 'react'
import viewAll from "../../assets/images/viewAll.png"
import FlashProductCard from '../flashProductCard/FlashProductCard'
import flashProductData from "../../constants/FlashProducts.json"
export default function FlashSale() {
  return (
    <div>
        <div className="header">
            <div>

            <h3>
                Flash Sale
            </h3>
            <p>
                Ending In
            </p>
            </div>
            <div>
                <div className="day">
                    <h1>00</h1>
                    <p>Days</p>
                </div>
                <div className="hour">
                    <h1>00</h1>
                    <p>Hours</p>
                </div>
                <div className="minute">
                    <h1>00</h1>
                    <p>Minutes</p>
                </div>
                <div className="second">
                    <h1>00</h1>
                    <p>Seconds</p>
                </div>
                
            </div>
            <div>
                <h4>View All</h4>
                <Image
                src={viewAll}
                style={{width: 15, height: 15}}
                />
            </div>
        </div>
        <div className="body">
            <FlashProductCard data={flashProductData}/>
        </div>
    </div>
  )
}
