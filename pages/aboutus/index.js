import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import aboutUs from "../../assets/images/aboutUs.png"
import localStyle from "./aboutUsStyle"
export default function index() {
    return (
        <div>
            <Header />

            <div className="mainBody" style={localStyle.container}>
                <div className="leftContainer" style={localStyle.leftContainer}>
                    <Image
                        src={aboutUs}
                        alt="Picture of the author"
                        width={586}
                        height={572}
                    />
                </div>
                <div className="rightContainer" style={localStyle.rightContainer}>
                    <div className="signupContainer" style={localStyle.rightMainContainer}>
                        <h1 style={localStyle.heading}>About Us</h1>
                        <div style={localStyle.privacyText}>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
