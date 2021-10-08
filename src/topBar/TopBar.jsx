import React from 'react';
import './TopBar.css'


export default function TopBar (){
    return (
        <div className="top">
           <div className="topLeft">
           <i className="topIcon fab fa-github-square"></i>
           <i className="topIcon fab fa-linkedin"></i>
           <i className="topIcon fas fa-envelope-square"></i>
           </div>

           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem">HOME</li>
                   <li className="topListItem">ABOUT</li>
                   <li className="topListItem">CONTACT</li>
                   <li className="topListItem">WRITE</li>
                   <li className="topListItem">LOGOUT</li>
               </ul>
           </div>
           <div className="topRight">
               <img 
               className="topImg"
               src="https://avatars.githubusercontent.com/u/61642721?v=4" 
               alt="User Image" />

               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    )
}