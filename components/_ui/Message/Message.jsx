import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMesssage = styled.p`
    padding-top:17px;
    padding-bottom:18px;
    width: 100%;
    text-align: center;
    margin-bottom: 144px;
`

const Message = ({ literal }) => {
    return (
        <StyledMesssage>
            {literal }
        </StyledMesssage>
    )
}

Message.propTypes = {
    literal: PropTypes.string.isRequired
}

export default Message
