import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const LoaderAnimation = keyframes`
    from {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    to {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`

const LoaderStyled = styled.div`
    position:fixed;
    height: 100%;
    width:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:6;
    background-color: #fff;
	opacity: 0.8;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Spinner = styled.div`
    margin-top: 96px;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        position: absolute;
        border: 4px solid black;
        opacity: 1;
        border-radius: 50%;
        animation: ${LoaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        &:nth-child(2) {
            animation-delay: -0.5s;
        }
    }

`

const Loader = () => {
    return (
        <LoaderStyled >
            <Spinner>
                <div></div>
                <div></div>
            </Spinner>
        </LoaderStyled>
    )
}


export default Loader
