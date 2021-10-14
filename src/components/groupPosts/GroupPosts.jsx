import React from 'react';
import Post from '../posts/Post.jsx';
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