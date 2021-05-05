import React from 'react'
import styled from 'styled-components'
import { themeBreakpoints } from '../../../theme/theme.styled'


const StyledContainer = styled.div`
    width: 100%;
	padding: 0 114px;
	margin: 0 auto;
`

const Container = ({ children }) => {

    return (
        <StyledContainer>
            { children }
        </StyledContainer>
    )
}

export default Container
