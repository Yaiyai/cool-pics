import React, { useRef } from 'react'

import styled from 'styled-components'

import { themeColors, themeFont } from '../../../theme/theme.styled'

import { IoSearchSharp, IoClose } from 'react-icons/io5'

const SearchGroup = styled.div`
    position:relative;
    margin-right: 32px;
    @media (max-width: 991px) {
        margin-right:0;
        width: 100%;
    }
`

const StyledSearchInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 18px 24px;
    width: 400px;
    font-family: ${themeFont.family};
    -webkit-appearance: none;
    &::placeholder{
        font-family: ${themeFont.family};
        font-size: 16px;
        line-height: 19px;
        color: #AAAAAA;
    }
    @media (max-width: 991px) {
        margin-bottom:16px;
        width: 100%;
    }

`
const StyledLupa = styled(IoSearchSharp)`
    position:absolute;
    right:15px;
    top:15px;
    width: 23.72px;
    height: 23.72px;
    color: #AAAAAA;
    cursor:pointer;
    &:hover{
        color: ${themeColors.primary};
    }
`
const StyledClose = styled(IoClose)`
    position:absolute;
    right:40px;
    top:14px;
    width: 27px;
    height: 27px;
    color: #AAAAAA;
    cursor:pointer;
    &:hover{
        color: ${themeColors.primary};
    }
    display: ${({ showclose }) => showclose ? `block` : `none`}
`



const SearchInput = ({ placeholder, inputChange, iconSubmit, keySubmit, eraseInput, showclose }) => {
    const inputSelected = useRef()

    const clearInput = () => {
        inputSelected.current.value = ''
        eraseInput()
    }

    return (
        <SearchGroup>
            <StyledClose onClick={ clearInput } showclose={ showclose } />
            <StyledLupa onClick={ iconSubmit } />
            <StyledSearchInput ref={ inputSelected } type="text" placeholder={ placeholder } onChange={ inputChange } onKeyDown={ keySubmit } />
        </SearchGroup>
    )
}

export default SearchInput
