import React from 'react';
import './Header.css'
import background from '../../assets/imgs/background.jpg'

export default function Header (){
    return (
       <div className="header">
           <div className="headerTitles">
                <span className="headerSubtitle1">React & Node</span>
                <span className="headerSubtitle2">Blog</span>
            </div>
            <img 
            className="headerImg"
            src={background}
            alt="Blog Background" />
       </div>
    )
}
