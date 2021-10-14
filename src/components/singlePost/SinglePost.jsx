import React from 'react';
import './SinglePost.css'

export default function SinglePost (){
    return (
      <div className="single-post">
         <div className="singlePostWrapper">
            <img 
            className="singlePostIMG"
            src="https://www.blogsenacsp.com.br/wp-content/uploads/2019/07/engenharia_de_computacao_13.jpg"  
            alt="Single Post" />

            <h1 className="singlePostTitle">
               Lorem Ipsum
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span>Autor <b>Safak</b></span>
            </div>
         </div>
      </div>
    );
}
