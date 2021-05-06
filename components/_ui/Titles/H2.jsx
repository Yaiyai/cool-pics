import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeFont } from '../../../theme/theme.styled'

const StyledH2 = styled.h2`
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h2};
    text-align: ${({ align }) => align ? `${align}` : `left`}
    @media (max-width: 575px) {
        text-align: center;
        font-size: 32px;
        line-height: 38.12px;
    }

`

const H2 = ({ title, align }) => {
    return (
        <StyledH2 align={ align }>
            {title }
        </StyledH2>
    )
}

H2.propTypes = {
    title: PropTypes.string.isRequired,
    align: PropTypes.string
}

export default H2
