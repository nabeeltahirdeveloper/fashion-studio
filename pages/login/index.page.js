import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import loginImage from "../../assets/images/loginView.png"
import localStyle from "./loginStyle"
export default function index() {
    return (
        <div>
            <Header />

            <div className="mainBody" style={localStyle.container}>
                <div className="leftContainer" style={localStyle.leftContainer}>
                    <Image
                        src={loginImage}
                        alt="Picture of the author"
                        width={586}
                        height={572}
                    />
                </div>
                <div className="rightContainer" style={localStyle.rightContainer}>
                    <div className="loginContainer" style={localStyle.rightMainContainer}>
                        <h1 style={localStyle.heading}>Log in</h1>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="email">Email</label>
                            <input style={localStyle.input} type="email" placeholder='Enter your email' name="email" id="email" />
                        </div>
                        <div style={{...localStyle.inputContainer}}>
                            <label style={localStyle.inputHeading} htmlFor="password">Password</label>
                            <input style={localStyle.input} type="password" placeholder='Enter your password' name="password" id="password" />
                        </div>
                        <div style={localStyle.newUser}>
                            <p>New user? Create account?</p>
                        </div>
                        <div style={localStyle.buttonContainer}>
                            <button style={localStyle.registerButton}>Register</button>
                            <button style={localStyle.loginButton}>Log in</button>
                        </div>
                        <div style={localStyle.forgotPasswordContainer}>
                            <p style={localStyle.forgotPassword}>Forgot password?</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
