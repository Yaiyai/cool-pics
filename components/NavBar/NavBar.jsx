import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import styled from 'styled-components'

import { themeColors } from '../../theme/theme.styled'

const StyledNavBar = styled.nav`
    background-color: ${themeColors.secondary};
    position: fixed;
    padding: ${({ scroll }) => (scroll ? `17px 0 17px 32px` : `24px 0 23px 32px`)};
    color: white;
    z-index: 5;
    top:0;
    left:0;
    right:0;
    @media (max-width: 575px) {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100vw;
        padding: ${({ scroll }) => (scroll ? `9px 0 10px` : `13px 0`)};
    };


`
const LogoStyled = styled.img`
    width: ${({ scroll }) => (scroll ? `128px` : `192px`)};
    height: ${({ scroll }) => (scroll ? `38px` : `57px`)};
    @media (max-width: 575px) {
        width: ${({ scroll }) => (scroll ? `96px` : `128px`)};
        height: ${({ scroll }) => (scroll ? `29px` : `38px`)};
    };
`

const NavBar = () => {
    const theNav = useRef(null)
    const [navHeight, setNavHeight] = useState()
    const [scroll, setScrolled] = useState(false);

    useEffect(() => {
        if (theNav) {
            setNavHeight(theNav.current.clientHeight)
            window.addEventListener('scroll', addClass)
        }
        return () => {
            window.removeEventListener('scroll', addClass)
        }
    }, [theNav, navHeight])

    const addClass = () => {
        if (window.scrollY > navHeight) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <StyledNavBar ref={ theNav } scroll={ scroll } >
            <LogoStyled scroll={ scroll } src="/assets/CoolPicsLogo.svg" alt="SuperLogo de CoolPics" />
        </StyledNavBar>
    )
}



export default NavBar
