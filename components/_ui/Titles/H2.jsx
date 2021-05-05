import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeFont } from '../../../theme/theme.styled'

const StyledH2 = styled.h2`
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h2};
    text-align: ${({ align }) => align ? `${align}` : `left`}
`

const H2 = ({ title, align }) => {
    return (
        <StyledH2 align={ align }>
            {title }
        </StyledH2>
    )
}

H2.propTypes = {

}

export default H2
