import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageCard from '../_ui/ImageCard/ImageCard'
import H2 from '../_ui/Titles/H2'
import Button from '../_ui/Button/Button'
import { themeFont } from '../../theme/theme.styled'
const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
	margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`
const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 40px 0 48px;
    + button{
        background: #FFFFFF;
        border: 1px solid #111111;
        box-sizing: border-box;
        border-radius: 8px;
        width: 300px;
        margin-bottom: 144px;
        align-self: center;
    }

`
const ActionGroup = styled.article`
    display:flex;
    align-items: center;
    margin-top: 39px;
`

const SearchInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 18px 24px;
    width: 400px;
    font-family: ${themeFont.family};
    &::placeholder{
        font-family: ${themeFont.family};
        font-size: 16px;
        line-height: 19px;
        color: #AAAAAA;
    }
`

const ImageGrid = ({ allImages }) => {
    const [gridState, setGridState] = useState({ images: allImages })
    const [counter, setCounter] = useState(9)

    useEffect(() => {
        const copyImages = [...allImages]
        const firstCut = copyImages.splice(0, 9)
        setGridState(gridState => ({ ...gridState, imagesToShow: firstCut }))
    }, [])

    const morePictures = () => {
        const copyImages = [...allImages]
        const currentCut = copyImages.splice(counter, 9)
        setGridState(gridState => ({ ...gridState, imagesToShow: [...gridState.imagesToShow, ...currentCut] }))
        setCounter(counter => counter + 9)
    }

    const changePicStyleToColor = () => {
        alert('color')
    }
    const changePicStyleToGray = () => {
        alert('gray')
    }
    const changePicStyleToBlur = () => {
        alert('blur')
    }

    return (
        <StyledContainer>
            <H2 title="Random Images" />
            <ActionGroup>
                <SearchInput placeholder='Search by author' />
                <Button literal="Color" method={ changePicStyleToColor } buttonStyle="primary" />
                <Button literal="Grayscale" method={ changePicStyleToGray } buttonStyle="secondary" />
                <Button literal="Blur" method={ changePicStyleToBlur } buttonStyle="secondary" />
            </ActionGroup>

            <Grid>
                {
                    gridState?.imagesToShow?.map((pic, idx) => <ImageCard
                        key={ pic.id }
                        picId={ idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}` }
                        author={ pic.author }
                        imageUrl={ `https://picsum.photos/id/${pic.id}/400/?random=1` }
                    />
                    )
                }
            </Grid>
            <Button literal="Load More" method={ morePictures } buttonStyle="primary" />
        </StyledContainer>
    )
}

ImageGrid.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default ImageGrid
