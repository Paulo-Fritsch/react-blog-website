import React from 'react';
import Post from '../posts/Post';
import './GroupPosts.css'


export default function GroupPosts (){
    return (
       <div className="group-posts">
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </div>
    )
}