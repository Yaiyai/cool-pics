import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const RotatedImage = styled.div`
    position: absolute;
    top:50px;
    right:90px;
    width:420px;
    height:420px;
    transform: rotate(12.66deg);
    &:after, &:before{
        content:"";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color:white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #EEEEEE;
    }
    &:after{
        z-index:-2;
        top: 60px;
        left: 60px;
    }
    &:before{
        z-index:-1;
        top: 30px;
        left: 30px;
    }
    @media (max-width: 768px) {
        width:252.35px;
        height:252.35px;
        top:36px;
    }
`

const StyledDogFigure = styled.figure`
        z-index:1;
        position:absolute;
        background-color:white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #EEEEEE;
        width: 100%;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content: center;
        img{
            width:315px;
            height: 315px;
            object-fit: cover;
            object-position: center;
            @media (max-width: 768px) {
                width:189.26px;
                height:189.26px;
            }
        }
`

const HeaderCard = () => {
    return (
        <RotatedImage>
            <StyledDogFigure>
                <img src='/assets/perrete.jpg' alt="Cool Dog from CoolPics" />
            </StyledDogFigure>
        </RotatedImage>
    )
}

export default HeaderCard
