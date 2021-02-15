import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={require('../../images/logo.svg')} alt='logo' />
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
        </>
    )
}

export default Navbar
