import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import './Settings.css'

export default function Settings (){
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://avatars.githubusercontent.com/u/61642721?v=4" 
                        alt="Profile" 
                        />
                        <label htmlFor="fileInput"><i class="settingsImg far fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="paulo" />
                    
                    <label>Email</label>
                    <input type="text" placeholder="paulo@gmail.com" />

                    <label>Password</label>
                    <input type="password" placeholder="********" />

                    <button className="settingsSubmit"> Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}