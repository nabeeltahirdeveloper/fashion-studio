import React from 'react'
import localStyle from "./HeaderStyle"
import colors from '../../components/colors'
import cartIcon from "../../assets/images/cartIcon.png"
import Logo from "../../assets/images/logo.png"
import searchIcon from "../../assets/images/searchIcon.png"
import Image from 'next/image'
export default function Header() {
  return (
         <div style={localStyle.header}>
          <div style={localStyle.headerContainer}>

          <Image
          src={Logo}
          alt="logo"
          style={{width: 240, height: 80}}
          />
          <p style={localStyle.headerText}>
            Category
          </p>
          <input style={localStyle.searchField} type="text" placeholder='Search Your Fashion' />
          <button style={localStyle.searchButton}>
            <Image
            src={searchIcon}
            alt="searchIcon"
            style={localStyle.searchIcon}
            />
          </button>
          </div>
          <div style={localStyle.headerText}>
            <h4 style={localStyle.headerHeadings}>Home
            <div style={localStyle.currentTab}></div>
            </h4>
            <h4 style={localStyle.headerHeadings}>Our Stores</h4>
            <h4 style={localStyle.headerHeadings}>About Us</h4>
            <h4 style={{...localStyle.headerHeadings, fontWeight:700, }}>Login</h4>
            <h4 style={{...localStyle.headerHeadings, fontWeight:700, color:colors.orange}}>Signup</h4>
            <div style={localStyle.headerHeadings}>
              <Image
              src={cartIcon}
              alt="cartIcon"
              style={localStyle.cartIcon}
              />
            </div>
          </div>
          
        </div>
  )
}
