import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../images/logo.png'
import styled from 'styled-components';

const LogoImg = styled.img`
    display: flex;
    width: 153px;
    height: 40px;
`

const Navbar = () => (  
            <Nav>
                <NavLink to="/">
                    <LogoImg src={logo} alt="Demo Main" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/demos" activeStyle>
                        Demos
                    </NavLink>
                    <NavLink to="/courses" activeStyle>
                        Courses
                    </NavLink>
                    <NavLink to="/features" activeStyle>
                        Features
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Events
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Shop
                    </NavLink>
                </NavMenu>
            </Nav>
);

export default Navbar;
