import React from 'react';
import './SideBar.css'


export default function SideBar (){
    return (
       <div className="side-Bar">
            <div className="side-barItem">
                <span className="side-barTitle"> About Me </span>
                <img 
                className="side-barIMG"
                src="https://avatars.githubusercontent.com/u/61642721?v=4" 
                alt="Personal" />
                <p className="side-barText">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s.
                </p>
            </div>

            <div className="side-barItem">
                <span className="side-barTitle"> Categories </span>
                <ul className="side-barList">
                    <li className="side-barListItem">Games</li>
                    <li className="side-barListItem">Tecnology</li>
                    <li className="side-barListItem">Computers</li>
                    <li className="side-barListItem">Science</li>
                </ul>
            </div>

            <div className="side-barItem">
                <span className="side-barTitle"> Categories </span>
                <div className="side-barSocial">
                    <i className="side-barIcon fab fa-github-square"></i>
                    <i className="side-barIcon fab fa-linkedin"></i>
                    <i className="side-barIcon fas fa-envelope-square"></i>
                </div>
            </div>

       </div>
    )
}