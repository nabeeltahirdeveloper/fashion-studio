import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import privacyPolicy from "../../assets/images/privacyPolicy.png"
import localStyle from "./privacyPolicyStyle"
import googleImage from "../../assets/images/google.png"
export default function index() {
    return (
        <div>
            <Header />

            <div className="mainBody" style={localStyle.container}>
                <div className="leftContainer" style={localStyle.leftContainer}>
                    <Image
                        src={privacyPolicy}
                        alt="Picture of the author"
                        width={586}
                        height={572}
                    />
                </div>
                <div className="rightContainer" style={localStyle.rightContainer}>
                    <div className="signupContainer" style={localStyle.rightMainContainer}>
                        <h1 style={localStyle.heading}>Our Privacy Policy</h1>
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
