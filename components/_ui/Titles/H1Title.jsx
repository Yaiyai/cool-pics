import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { themeFont } from '../../../theme/theme.styled'

const StyledH1 = styled.h1`
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h1};
    line-height: 76px;
    @media (max-width: 575px) {
        font-size: 32px;
        line-height: 38px;
    };
`


const H1Title = ({ literal }) => {
    return (
        <StyledH1>{ literal }</StyledH1>
    )
}

H1Title.propTypes = {
    literal: PropTypes.string.isRequired
}


export default H1Title
