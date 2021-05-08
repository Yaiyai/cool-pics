import React from 'react'

import styled from 'styled-components'

import { themeColors, themeFont } from '../../../theme/theme.styled'

import { IoSearchSharp } from 'react-icons/io5'

const SearchGroup = styled.div`
    position:relative;
    margin-right: 32px;
    @media (max-width: 768px) {
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
    @media (max-width: 768px) {
        margin-bottom:16px;
        width: 100%;
    }

`
const StyledIcon = styled(IoSearchSharp)`
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



const SearchInput = ({ placeholder, inputChange, iconSubmit, keySubmit }) => {
    return (
        <SearchGroup>

            <StyledIcon onClick={ iconSubmit } />
            <StyledSearchInput type="text" placeholder={ placeholder } onChange={ inputChange } onKeyDown={ keySubmit } />
        </SearchGroup>
    )
}

export default SearchInput
