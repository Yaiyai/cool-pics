import React from 'react'
import styled from 'styled-components'
import { themeBreakpoints } from '../../../theme/theme.styled'


const StyledContainer = styled.div`
    max-width: 1400px;
    width: 100%;
	padding-left: 0;
	padding-right: 0;
	margin: 0 auto;
    @media (min-width: ${themeBreakpoints.xxlUp}) {
        max-width: 1400px;
    };
    @media (min-width: ${themeBreakpoints.xlUp}) and (max-width: ${themeBreakpoints.xlDown}) {
        max-width: 1190px;
    };
    @media (min-width: ${themeBreakpoints.lgUp}) and (max-width: ${themeBreakpoints.lgDown}) {
        max-width: 960px;
    };
    @media (min-width: ${themeBreakpoints.mdUp}) and (max-width: ${themeBreakpoints.mdDown}) {
        max-width: 700px;
    };
    @media (min-width: ${themeBreakpoints.smUp}) and (max-width: ${themeBreakpoints.smDown}) {
        max-width: 540px;
    };
    @media (max-width: ${themeBreakpoints.xsDown}) {
        max-width: 320px;
    };
`

const Container = ({ children }) => {

    return (
        <StyledContainer>
            { children }
        </StyledContainer>
    )
}

export default Container
