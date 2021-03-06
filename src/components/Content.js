import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';
import CorImg from '../images/CorImg.jpg'
import Author from '../images/Author.jpg'

const CourseContainer = styled.section`
  box-sizing: border-box;
  color: rgb(102, 102, 102);
  display: flex;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  height: 398.5px;
  line-height: 25.5px;
  position: relative;
  width: 1200px;
`

const StyledCourse = styled.article`
  backface-visibility: hidden;
  box-sizing: border-box;
  color: rgb(102, 102, 102);
  cursor: grabbing;
  display: block;
  float: left;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  height: 398.5px;
  line-height: 25.5px;
  padding-left: 15px;
  padding-right: 15px;
  text-size-adjust: 100%;
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 300px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const CourseImage = styled.img`
  width: 100%;
  transition: all 0.5s ease-in-out;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  aspect-ratio: auto 400 / 300;
  cursor: pointer;
`

const CourseName = styled.h1`
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    text-size-adjust: 100%;
    color: rgb(51, 51, 51);
    text-align: center;
`

const AuthorImage = styled.img`
    margin-top: -28px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative;
    z-index: 3;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    aspect-ratio: auto 50 / 50;
    width: 50px;
    text-align: center;
    margin-left: 105px;
`

const AuthorName = styled.h4`
  color: #7a7a7a;
  text-decoration: none;
  background-color: transparent;
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  border: 1px solid #e5e5e5;
  border-top: 0;
  padding: 0 20px;
  text-align: center;
  box-shadow: none;
`
const Info = () => ( 
    <>
      <AuthorImage src={Author}/>
      <AuthorName>
        Rasul Muallim
      </AuthorName>
      <CourseName>
        React for disabled
      </CourseName>
    </>
    
);

const Course = () => ( 
    <StyledCourse>
      <CourseImage src={CorImg}/>
      <Info />
    </StyledCourse>
    
);

const Content = () => ( 
    <CourseContainer>
        <Course />
        <Course />
        <Course />
        <Course />
    </CourseContainer>
    
);


export default Content;