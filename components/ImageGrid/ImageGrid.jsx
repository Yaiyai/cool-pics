import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageCard from '../_ui/ImageCard/ImageCard'
import Button from '../_ui/Button/Button'
import { themeColors, themeFont } from '../../theme/theme.styled'
import { IoSearchSharp } from 'react-icons/io5'
import Loader from '../_ui/Loader/Loader'

const StyledContainer = styled.div`
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
    @media (min-width: 769px) and (max-width: 991px) {
        max-width: 750px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        max-width: 530px;
    }
    @media (max-width: 575px) {
        max-width: 382px;
    };
    @media (max-width: 399px) {
        max-width: 300px;
    };
`

const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    padding: 0 0 48px;
    + button{
        width: 300px;
        margin-bottom: 144px;
        align-self: center;
        @media (max-width: 768px) {
            width:100%;
        }
        
    }
    @media (max-width: 768px) {
        padding-bottom:32.2px;
    }
`

const ActionGroup = styled.article`
    display:flex;
    align-items: center;
    padding: 39px 0 40px;
    button{
        margin-right: 16px;
        width:140px;
        @media (max-width: 768px) {
            width: 118px;
            margin-right:14px;
            &:last-of-type{
                margin-right: 0;
            }
        }
    }
    @media (max-width: 768px) {
        flex-direction:column;
        padding-bottom: 30px;
    }

`

const SearchGroup = styled.div`
    position:relative;
    margin-right: 32px;
    @media (max-width: 768px) {
        margin-right:0;
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
    @media (max-width: 768px) {
        margin-bottom:16px;
        width: 100%;
    }

`

const StyledH2 = styled.h2`
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h2};
    text-align: ${({ align }) => align ? `${align}` : `left`}
    @media (max-width: 575px) {
        text-align: center;
        font-size: 32px;
        line-height: 38.12px;
    }

`


const ImageGrid = ({ allImages }) => {
    const [gridState, setGridState] = useState({})
    const [loading, setLoading] = useState(false)

    const [currentStyle, setCurrentStyle] = useState('color')

    const [searchItem, setSearchItem] = useState('')

    //Images Methods
    // // Each time more images are loaded, the counter is increased by 9 units for reference in the initial image array. The initial count is the number of images required in the first load.
    const [counter, setCounter] = useState(9)

    const setFirstImages = (limit = 9) => {
        const copyImages = [...allImages]
        const firstCut = copyImages.splice(0, limit)
        setGridState(gridState => ({ ...gridState, imagesToShow: firstCut }))
    }

    const morePictures = () => {
        setLoading(true)
        Promise.resolve()
            .then(() => {
                const copyImages = [...allImages]
                const currentCut = copyImages.splice(counter, 9)
                setGridState(gridState => ({ ...gridState, imagesToShow: [...gridState.imagesToShow, ...currentCut] }))
                setCounter(counter => counter + 9)
            })
            .then(() => setTimeout(() => setLoading(false), [500]))
    }

    const changePicStyleToColor = useCallback(() => {
        setCurrentStyle('color')
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
        setLoading(true)
        Promise.resolve()
            .then(() => {
                if (searchItem) {
                    const searchingImages = gridState.imagesToShow.filter(pic => pic.author.toLowerCase().includes(searchItem))
                    setGridState(gridState => ({ ...gridState, imagesToShow: searchingImages }))
                } else {
                    setFirstImages(counter)
                }
            })
            .then(() => setTimeout(() => setLoading(false), [500]))

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
        <>
            {loading && <Loader /> }
            <StyledContainer>
                <StyledH2>Random Images</StyledH2>

                <ActionGroup>
                    <SearchGroup>
                        <SearchInput type="text" placeholder='Search by author' onChange={ handleInputChange } value={ searchItem } onKeyDown={ handleKeySubmit } />
                        <StyledIcon onClick={ handleSubmit } />
                    </SearchGroup>
                    <div>
                        <Button active={ currentStyle === 'color' } literal="Color" method={ changePicStyleToColor } buttonStyle="secondary" />
                        <Button active={ currentStyle === 'grayscale' } literal="Grayscale" method={ changePicStyleToGray } buttonStyle="secondary" />
                        <Button active={ currentStyle === 'blur' } literal="Blur" method={ changePicStyleToBlur } buttonStyle="secondary" />
                    </div>
                </ActionGroup>

                <Grid>
                    { gridState?.imagesToShow?.length ?
                        (gridState?.imagesToShow?.map((pic, idx) => <ImageCard
                            key={ pic.order }
                            picId={ pic.order }
                            author={ pic.author }
                            imageUrl={ pic.url }
                            style={ currentStyle }
                        />
                        )) : (
                            <p>Oops! Nothing to show here!</p>
                        )
                    }
                </Grid>
                <Button literal="Load More" method={ morePictures } buttonStyle="outlined" />
            </StyledContainer>
        </>
    )
}

ImageGrid.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default ImageGrid
