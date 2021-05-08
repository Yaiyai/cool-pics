import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
	margin: 0 auto;
    display:flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    align-items: flex-start;
    @media (min-width: 1300px) {
        max-width: 1209px;
    };
    @media (min-width: 1199px) and (max-width: 1299px) {
        max-width: 1150px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 920px;
    }
    @media (min-width: 769px) and (max-width: 991px) {
        max-width: 750px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        max-width: 530px;
    }
    @media (min-width: 400px) and (max-width: 575px) {
        max-width: 382px;
    };
    @media (max-width: 399px) {
        max-width: 300px;
    };
    
`
const HeaderContainer = ({ children }) => {
    return (
        <StyledContainer>
            {children }
        </StyledContainer>
    )
}

export default HeaderContainer
