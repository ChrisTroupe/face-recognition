import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './face.png';



const Logo = () => {
    return (
        <div className ='ma4 mt0'> 
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 60, scale: 1.1 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> 
                    <img className ='Logo' alt = 'logo' src={brain} />  
                </div>
            </Tilt>
        </div> 
    );

}

export default Logo;