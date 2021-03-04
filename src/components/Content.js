import React from 'react'
import ReactDom from 'react-dom'
import './content.css';


function Content(){
  return (
  <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  )
}

const Book = () =>{
  return(
    <article className='book'>
      <Image />
      <Author />
      <Title />      
    </article>
  )
}

const Image = () => {
return (
<img src="https://educationwp.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/course-4-400x300.jpg" alt="" className='courseimage'/>
)
};

const Author = () => {
  return(
    <h1>Keny White</h1>
  )
}

const Title = () => {
  return(
    <h1>LMS Interactive Content</h1>
  )
}
export default Content;