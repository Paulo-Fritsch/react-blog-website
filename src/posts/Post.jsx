import React from 'react';
import './Post.css'
export default function Post (){
    return (
       <div className="post">
           <img 
           className="postImg"
           src="https://www.blogsenacsp.com.br/wp-content/uploads/2019/07/engenharia_de_computacao_13.jpg" 
           alt="Post Representation" />
        
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategories">Science</span>
                <span className="postCategories">Tecnology</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postData">1 hour ago</span>
        </div>
            <p className="postDescription">
            Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s.
            </p>
       </div>
    )
}
