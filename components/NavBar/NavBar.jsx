import React from 'react'
import styled from 'styled-components'
import { themeColors, themeModule } from '../../theme/theme.styled'

const StyledNavBar = styled.nav`
    background-color: ${themeColors.secondary};
    padding: ${themeModule} 0;
    color: white;
    ${props => props.scrolled && css`
        background-color: coral;
    `}
`

const NavBar = () => {
    return (
        <StyledNavBar>
            nav
        </StyledNavBar>
    )
}



export default NavBar
