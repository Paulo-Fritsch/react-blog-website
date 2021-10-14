import React from 'react';
import Header from "../../components/header/Header";
import GroupPosts from '../../components/groupPosts/GroupPosts.jsx';
import SideBar from '../../components/sideBar/SideBar.jsx';
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