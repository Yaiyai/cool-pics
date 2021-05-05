import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeFont } from '../../../theme/theme.styled'

const StyledH1 = styled.h2`
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h2};
    text-align: ${({ align }) => align ? `${align}` : `left`}
`

const H1 = ({ title, align }) => {
    return (
        <StyledH1 align={ align }>
            {title }
        </StyledH1>
    )
}

H1.propTypes = {
    title: PropTypes.string.isRequired,
    align: PropTypes.string
}

export default H1
