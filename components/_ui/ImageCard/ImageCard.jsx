import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fadeIn, fadeOut, imageDown, imageUp, themeFont } from '../../../theme/theme.styled'


const StyledImageCard = styled.article`
    width: 387px;
    height: 343px;
    background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : `url(assets/perrete.jpg)`};
    background-size: cover;
    background-repeat: no-repeat;
    animation: ${imageDown} 500ms ease-out;
    background-position-x: center;
    background-position-y: center;
    border: 1px solid #EEEEEE;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    box-sizing: border-box;
    margin-bottom: 24px;
    position: relative;
    overflow:hidden;
    padding: 16px;
    display:flex;
    align-items:flex-start;
    justify-content: flex-end;
    margin-right:24px;
    &:nth-child(3n){
        margin-right:0;
    }
    @media (max-width: 768px) {
        animation: none;
    }

    &:hover{
        animation: ${imageUp} 500ms ease-out;
        background-position-y:-50px;
        filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.25));
        @media (max-width: 768px) {
            animation: none;
            background-position-y:center;
            filter:none;
        }

        p{
            &:last-of-type{
                animation: ${fadeIn} 500ms ease-out;
                opacity: 1;
                @media (max-width: 768px) {
                    animation: none;
                }

            }
        }
    }

    @media (min-width: 1199px) and (max-width: 1299px) {
        width: 367px;
        height: 325px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 290px;
        height: 257px;
    }

    @media (min-width: 769px) and (max-width: 991px) {
        width: 363px;
        height: 321px;
        &:nth-child(odd){
            margin-right:24px;
        }
        &:nth-child(even){
            margin-right:0;
        }
    }
    @media (min-width: 576px) and (max-width: 768px) {
        width: 263px;
        height: 233px;
        &:nth-child(odd){
            margin-right:24px;
        }
        &:nth-child(even){
            margin-right:0;
        }
    }

    @media (max-width: 575px) {
        width: 380px;
        height: 336.8px;
        filter:none;
        margin-bottom: 16.2px;
        margin-right:0;
        &:last-of-type{
            margin-bottom:0;
        }
    }
    @media (max-width: 399px) {
        width: 100%;
        height:266px;
        margin-right:0;
    };
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
    line-height:29px;
    @media (max-width: 768px) {
        opacity:1;
        animation: none;
    }
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
    line-height:29px;
`



const ImageCard = React.memo(({ imageUrl, author, picId, style }) => {
    return (
        <StyledImageCard imageUrl={ style ? `${imageUrl}?${style}` : `${imageUrl}` }>
            <InfoId>{ picId }</InfoId>
            <InfoHover>{ author }</InfoHover>
        </StyledImageCard>
    )
})

ImageCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    picId: PropTypes.string.isRequired
}

export default ImageCard

