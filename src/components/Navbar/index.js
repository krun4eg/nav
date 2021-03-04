import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../images/logo.jpg'
import styled from 'styled-components';

const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`

const Navbar = () => (  
            <Nav>
                <NavLink to="/">
                    <LogoImg src={logo} alt='logo' />
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="sigin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
);

export default Navbar;
