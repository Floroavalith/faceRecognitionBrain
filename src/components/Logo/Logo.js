import React from 'react'
import Tilt from 'react-tilt'
import LogoImage from './logoImage.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma4 ma0">
            <Tilt className="Tilt br2 shadow-2 br4" options={{ max : 80 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> <img alt="Logo" src={LogoImage}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;