import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';


const StyledHeader = styled.header `
    background : #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100w - 1000px) / 2);
    z-index: 10;
    box-shadow: 0 1px 5px -2px rgb(42 42 42 / 40%);
    &.active {
        background-color: transparent;
    }
`

const Header = () => ( 
    <StyledHeader className="active">
        <Navbar />
    </StyledHeader>
    
);



// 


export default Header;