import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const RotatedImage = styled.div`
    position: absolute;
    bottom:0;
    right:0;
    width:420px;
    height:420px;
    transform: rotate(12.66deg);
    figure{
        z-index:1;
        position:absolute;
        padding: 62px;
        background-color:white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #EEEEEE;
        img{
            width:100%;
        }
    }
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
        top: 40px;
        left: 24px;
    }
    &:before{
        z-index:-2;
        top: 80px;
        left: 48px;
    }
`

const HeaderCard = () => {
    return (
        <RotatedImage>
            <figure>
                <img src='/assets/perrete.png' alt="Cool Dog from CoolPics" />
            </figure>
        </RotatedImage>
    )
}

export default HeaderCard
