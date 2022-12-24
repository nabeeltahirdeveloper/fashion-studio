import React from 'react'
import localStyle from "./FooterStyle"
import Image from "next/image"
import logo from "../../assets/images/logo.png"
export default function Footer() {
  return (
    <div style={localStyle.footerContainer}>
        <div className="leftSide" style={localStyle.leftSide}>
            <div className="firstContainer">

            <Image
            src={logo}
            alt="logo"
            style={localStyle.logoStyle}
            />

            <div className="text" style={localStyle.text}>
            Fashion Studio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
            </div>
            </div>
        </div>
    </div>
  )
}
