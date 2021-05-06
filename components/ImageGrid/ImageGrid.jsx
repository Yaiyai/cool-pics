import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageCard from '../_ui/ImageCard/ImageCard'
import H2 from '../_ui/Titles/H2'
import Button from '../_ui/Button/Button'
import { themeFont } from '../../theme/theme.styled'

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1209px;
	margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`
const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    padding: 40px 0 48px;
    + button{
        width: 300px;
        margin-bottom: 144px;
        align-self: center;
    }
`

const ActionGroup = styled.article`
    display:flex;
    align-items: center;
    margin-top: 39px;
    button{
        margin-right: 16px;
        width:140px;
    }
`

const SearchInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 18px 24px;
    width: 400px;
    font-family: ${themeFont.family};
    margin-right: 32px;
    &::placeholder{
        font-family: ${themeFont.family};
        font-size: 16px;
        line-height: 19px;
        color: #AAAAAA;
    }
`

const ImageGrid = ({ allImages }) => {
    const [gridState, setGridState] = useState({})

    const [currentStyle, setCurrentStyle] = useState('')

    const [searchItem, setSearchItem] = useState('')

    //Images Methods
    // // Each time more images are loaded, the counter is increased by 9 units for reference in the initial image array. The initial count is the number of images required in the first load.
    const [counter, setCounter] = useState(9)

    const setFirstImages = () => {
        const copyImages = [...allImages]
        const firstCut = copyImages.splice(0, 9)
        setGridState(gridState => ({ ...gridState, imagesToShow: firstCut }))
    }

    const morePictures = () => {
        const copyImages = [...allImages]
        const currentCut = copyImages.splice(counter, 9)
        setGridState(gridState => ({ ...gridState, imagesToShow: [...gridState.imagesToShow, ...currentCut] }))
        setCounter(counter => counter + 9)
    }

    const changePicStyleToColor = useCallback(() => {
        setCurrentStyle('')
    }, [])

    const changePicStyleToGray = useCallback(() => {
        setCurrentStyle('grayscale')
    }, [])

    const changePicStyleToBlur = useCallback(() => {
        setCurrentStyle('blur')
    }, [])


    //Input methods
    const handleInputChange = (e) => {
        setSearchItem(e.target.value)
    }

    const handleSubmit = () => {
        if (searchItem) {
            const searchingImages = allImages.filter(pic => pic.author.toLowerCase().includes(searchItem))
            setGridState(gridState => ({ ...gridState, imagesToShow: searchingImages }))
        } else {
            setFirstImages()
        }
    }

    const handleKeySubmit = (e) => {
        if (event.key === 'Enter') {
            handleSubmit(e)
        }
    }


    useEffect(() => {
        setFirstImages()
    }, [])


    return (
        <StyledContainer>
            <H2 title="Random Images" />

            <ActionGroup>
                <SearchInput type="text" placeholder='Search by author' onChange={ handleInputChange } value={ searchItem } onKeyDown={ handleKeySubmit } />
                <Button literal="Color" method={ changePicStyleToColor } buttonStyle="primary" />
                <Button literal="Grayscale" method={ changePicStyleToGray } buttonStyle="secondary" />
                <Button literal="Blur" method={ changePicStyleToBlur } buttonStyle="secondary" />
            </ActionGroup>

            <Grid>
                {
                    gridState?.imagesToShow?.map((pic, idx) => <ImageCard
                        key={ pic.order }
                        picId={ pic.order }
                        author={ pic.author }
                        imageUrl={ pic.url }
                        style={ currentStyle }
                    />
                    )
                }
            </Grid>
            <Button literal="Load More" method={ morePictures } buttonStyle="outlined" />
        </StyledContainer>
    )
}

ImageGrid.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default ImageGrid
