import React from 'react';
import Posts from '../posts/Posts';
import './GroupPosts.css'


export default function GroupPosts (){
    return (
       <div className="group-posts">
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
       </div>
    )
}