import React from 'react'

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
    @media (min-width: 769px) and (max-width: 991px) {
        width:252.35px;
        height:252.35px;
        top:0px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        width:252.35px;
        height:252.35px;
        top:36px;
        right:170px;
    }
    @media (min-width: 400px) and (max-width: 575px) {
        width:252.35px;
        height:252.35px;
        top:36px;
    }
    @media (max-width: 399px) {
        width:180px;
        height:180px;
        top:36px;
        right: 55px;
        &:after{
            top: 40px;
            left: 40px;
        }
        &:before{
            top: 20px;
            left: 20px;
        }
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
            @media (min-width: 400px) and (max-width: 992px) {
                width:189.26px;
                height:189.26px;
            }
            @media (max-width: 399px) {
                width:130px;
                height:130px;
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
