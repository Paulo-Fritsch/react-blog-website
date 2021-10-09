import React from 'react';
import Header from '../../header/Header';
import GroupPosts from '../../groupPosts/GroupPosts';
import SideBar from '../../sideBar/SideBar';
import './Home.css'


export default function Home (){
    return (
        <>
        <Header/>
        <div className="home">
           <GroupPosts/>
           <SideBar/>
        </div>
        </>
    )
}