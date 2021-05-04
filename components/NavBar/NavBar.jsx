import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import styled from 'styled-components'

import { themeColors } from '../../theme/theme.styled'

const StyledNavBar = styled.nav`
    background-color: ${themeColors.secondary};
    position: ${({ scroll }) => (scroll ? `fixed` : `static`)};
    padding: ${({ scroll }) => (scroll ? `17px 0 17px 32px` : `24px 0 23px 32px`)};
    color: white;
    width: 100vw;
    z-index: 5;
    ${({ scroll }) => (scroll && `
            top:0;
            left:0;
            right:0;
        `
    )};
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
            <Image src="/assets/CoolPicsLogo.svg" alt="SuperLogo de CoolPics" width={ scroll ? 128 : 192 } height={ scroll ? 38 : 57 } />
        </StyledNavBar>
    )
}



export default NavBar
