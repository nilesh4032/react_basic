import React from 'react'

const Book=(props)=>{
    const clickHandler=()=>{
      alert("hello");
    }
    const{img, title, author}=props;
    return <article className='book'>
     <img src={img} alt="this img is not available"/>
      <h1>{title}</h1>
      <h4 >{author}</h4>
      <button type="button" onClick={ clickHandler}>hello</button>
    </article>
    
  }

export default Book
