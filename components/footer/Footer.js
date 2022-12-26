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
            <div style={localStyle.footerTabs}>
              <ul>
                <li>Signup</li>
                <li>Login</li>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>About Us</li>
              </ul>
            </div>
        </div>
        <div className="rightSide" style={localStyle.rightSide}>
          <div className="name" style={localStyle.nameContainer}>

          <input style={{...localStyle.input, ...localStyle.firstName}} type="text" name="firstName" id="fName" placeholder='First Name' />
          <input style={{...localStyle.input, ...localStyle.lastName}} type="text" name="lastName" id="lName" placeholder='Last Name' />
          </div>
          <input style={{...localStyle.input, ...localStyle.email}} type="email" name="email" id="email" placeholder='Email' />
          <input style={{...localStyle.input, ...localStyle.subject}} type="text" name="subject" id="subject" placeholder='Subject' />
          <textarea style={{...localStyle.input, ...localStyle.message}} name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button style={localStyle.button}>Message</button>
        </div>
    </div>
  )
}
