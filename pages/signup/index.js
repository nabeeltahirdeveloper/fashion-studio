import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import Signup from "../../assets/images/signup.png"
import localStyle from "./signupStyle"
import googleImage from "../../assets/images/google.png"
export default function index() {
    return (
        <div>
            <Header />

            <div className="mainBody" style={localStyle.container}>
                <div className="leftContainer" style={localStyle.leftContainer}>
                    <Image
                        src={Signup}
                        alt="Picture of the author"
                        width={586}
                        height={572}
                    />
                </div>
                <div className="rightContainer" style={localStyle.rightContainer}>
                    <div className="signupContainer" style={localStyle.rightMainContainer}>
                        <h1 style={localStyle.heading}>Sign Up</h1>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="name">Name</label>
                            <input style={localStyle.input} type="name" placeholder='Enter your Full Name' name="name" id="name" />
                        </div>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="email">Email</label>
                            <input style={localStyle.input} type="email" placeholder='Enter your email' name="email" id="email" />
                        </div>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="password">Password</label>
                            <input style={localStyle.input} type="password" placeholder='Enter your password' name="password" id="password" />
                        </div>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="cPassword">Confirm Password</label>
                            <input style={localStyle.input} type="password" placeholder='Enter your confirm password' name="cPassword" id="cPassword" />
                        </div>
                        <div style={localStyle.newUser}>
                            <p>Already have an account? Login?</p>
                        </div>
                        <div style={localStyle.buttonContainer}>
                            <button style={localStyle.signupWithGoogleButton}>
                                Signup with Google <Image src={googleImage} alt="google" style={localStyle.googleImage} />
                            </button>
                            <button style={localStyle.loginButton}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
