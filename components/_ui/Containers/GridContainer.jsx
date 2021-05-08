import React from 'react'
import styled from 'styled-components'

const StyledContainerImages = styled.section`
    width: 100%;
	margin: 0 auto;
    display:flex;
    flex-direction: column;
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
    @media (max-width: 991px) {
        align-items: center;
    };
    @media (min-width: 769px) and (max-width: 991px) {
        max-width: 750px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        max-width: 550px;
    }
    @media (min-width: 400px) and (max-width: 575px) {
        max-width: 382px;
    };
    @media (max-width: 399px) {
        max-width: 250px;
    };
`

const GridContainer = ({ children }) => {
    return (
        <StyledContainerImages>
            {children }
        </StyledContainerImages>
    )
}

export default GridContainer
