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
               <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDescription">
               Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Temporibus at, sequi corrupti quod error dolore 
               adipisci voluptatem ad eveniet! Accusantium pariatur 
               dicta consectetur tempora numquam distinctio 
               reprehenderit velit laboriosam beatae.Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Temporibus at, sequi corrupti quod error dolore 
               adipisci voluptatem ad eveniet! Accusantium pariatur 
               dicta consectetur tempora numquam distinctio 
               reprehenderit velit laboriosam beatae.Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Temporibus at, sequi corrupti quod error dolore 
               adipisci voluptatem ad eveniet! Accusantium pariatur 
               dicta consectetur tempora numquam distinctio 
               reprehenderit velit laboriosam beatae.Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Temporibus at, sequi corrupti quod error dolore 
               adipisci voluptatem ad eveniet! Accusantium pariatur 
               dicta consectetur tempora numquam distinctio 
               reprehenderit velit laboriosam beatae.
            </p>
         </div>
      </div>
    );
}
