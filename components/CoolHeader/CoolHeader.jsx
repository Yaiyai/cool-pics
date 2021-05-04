import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderSection = styled.header`
    background-color: black;
    position: relative;
    display: flex;
    padding-top: 242px;
    color: white;
`
const LeftSection = styled.section`
    width: 50%;
`
const RightSection = styled.section`
    width: 50%;
`


const CoolHeader = ({ title, subtitle, buttonLiteral, buttonMethod }) => {
    return (
        <HeaderSection>
            <LeftSection>
                left
            </LeftSection>
            <RightSection>
                tightt
            </RightSection>
        </HeaderSection>
    )
}

CoolHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLiteral: PropTypes.string,
    buttonMethod: PropTypes.func
}

export default CoolHeader

