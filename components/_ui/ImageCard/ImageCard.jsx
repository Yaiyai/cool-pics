import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { themeFont } from '../../../theme/theme.styled'

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`
const fadeOut = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`

const StyledImageCard = styled.article`
    width: 387px;
    height: 343px;
    background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : `url(assets/perrete.jpg)`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #EEEEEE;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    box-sizing: border-box;
    margin-bottom: 24px;
    position: relative;
    overflow:hidden;
    box-shadow: 0px 4px 14px 0px #00000040;
    padding: 16px;
    display:flex;
    align-items:flex-start;
    justify-content: flex-end;
    margin-right:24px;
    &:nth-child(3n){
        margin-right:0;
    }

    &:hover{
        p{
            &:last-of-type{
                animation: ${fadeIn} 500ms ease-out;
                opacity: 1;
            }
        }
    }
   
`

const InfoHover = styled.p`
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    border-radius: 0px;
    padding: 13px 16px 14px;
    position: absolute;
    width: 100%;
    bottom: 0px;
    left:0;
    right: 0;
    animation: ${fadeOut} 500ms ease-out;
    opacity:0;
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.xl};
`

const InfoId = styled.p`
    background-color: rgba(17, 17, 17, 0.8);
    border-radius: 100px;
    color: white;
    padding: 8px 16px;
    width: fit-content;
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.xl};
`



const ImageCard = ({ imageUrl, author, picId, style }) => {
    return (
        <StyledImageCard imageUrl={ style ? `${imageUrl}&${style}` : `${imageUrl}` }>
            <InfoId>{ picId }</InfoId>
            <InfoHover>{ author }</InfoHover>
        </StyledImageCard>
    )
}

ImageCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    picId: PropTypes.string.isRequired
}

export default ImageCard

