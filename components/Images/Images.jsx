import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Button from '../_ui/Button/Button'
import GridContainer from '../_ui/Containers/GridContainer'
import ImageCard from '../_ui/ImageCard/ImageCard'
import Loader from '../_ui/Loader/Loader'
import Message from '../_ui/Message/Message'
import SearchInput from '../_ui/SearchInput/SearchInput'

import { themeColors, themeFont } from '../../theme/theme.styled'
import { getPictures } from '../../pages/api/picsum.api'


const Grid = styled.article`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    padding: 0 0 48px;
    width: 100%;
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
    width:100%;
    .btn-group{
        @media (max-width: 399px) {
            width: 100%;
            display:flex;
            flex-direction:column;
        }
        button{
            margin-right: 16px;
            width:140px;
            @media (min-width: 400px) and (max-width: 768px) {
                width: 118px;
                margin-right:14px;
                &:last-of-type{
                    margin-right: 0;
                }
            }
            @media (max-width: 399px) {
                width: 100%;
                margin-bottom: 12px;
            }
        }
    }
    @media (max-width: 991px) {
        flex-direction:column;
        padding-bottom: 30px;
    }
    @media (max-width: 399px) {
        width: 100%;
    }


`

const StyledH2 = styled.h2`
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h2};
    line-height: 67px;
    @media (max-width: 991px) {
        text-align: center;
        font-size: 32px;
        line-height: 38.12px;
    }

`

const Images = ({ allImages }) => {
    const [imagesState, setImagesState] = useState({ apiImages: allImages })

    const [pagedApi, setPagedApi] = useState(2)

    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(9)

    const [currentStyle, setCurrentStyle] = useState('color')

    const [searchImage, setSearchImage] = useState('')

    useEffect(() => {
        setFirstImages()
    }, [])

    //Images Methods

    const setFirstImages = (limit = 9) => {
        const firstCut = [...imagesState.apiImages].splice(0, limit)
        setImagesState(imagesState => ({ ...imagesState, imagesToShow: firstCut }))
    }

    const morePictures = () => {
        const currentCut = [...imagesState.apiImages].splice(counter, 9)
        setLoading(true)

        if (searchImage) {
            Promise.resolve()
                .then(() => imagesState.imagesToShow.length % 90 == 0 && anotherHundredImages())
                .then(() => {
                    const searchInCut = currentCut.filter(pic => pic.author.toLowerCase().includes(searchImage))
                    setImagesState(imagesState => ({ ...imagesState, imagesToShow: [...imagesState.imagesToShow, ...searchInCut], prevLoadedImages: currentCut }))
                    setCounter(counter => counter + 9)
                })
                .then(() => setTimeout(() => setLoading(false), [500]))

        } else {
            Promise.resolve()
                .then(() => imagesState.imagesToShow.length % 90 == 0 && anotherHundredImages())
                .then(() => {
                    setImagesState(imagesState => ({ ...imagesState, imagesToShow: [...imagesState.imagesToShow, ...currentCut] }))
                    setCounter(counter => counter + 9)
                })
                .then(() => setTimeout(() => setLoading(false), [500]))
        }
    }

    const anotherHundredImages = async () => {
        console.log('hola');
        const hundredPictures = await getPictures(pagedApi, 100)
        setImagesState(imagesState => ({ ...imagesState, apiImages: [...imagesState.apiImages, ...hundredPictures] }))
        setPagedApi(p => p + 1)
    }

    //Color Methods

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
        setSearchImage(e.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)
        !imagesState.prevLoadedImages?.length && setImagesState(imagesState => ({ ...imagesState, prevLoadedImages: imagesState.imagesToShow }))
        Promise.resolve()
            .then(() => {
                if (searchImage) {
                    const searchingImages = imagesState.prevLoadedImages?.length
                        ?
                        imagesState.prevLoadedImages.filter(pic => pic.author.toLowerCase().includes(searchImage))
                        :
                        imagesState.imagesToShow.filter(pic => pic.author.toLowerCase().includes(searchImage))
                    setImagesState(imagesState => ({ ...imagesState, imagesToShow: searchingImages }))
                } else {
                    setImagesState(imagesState => ({ ...imagesState, prevLoadedImages: [] }))
                    setFirstImages(counter)
                }
            })
            .then(() => setTimeout(() => setLoading(false), [500]))
    }

    const handleEraseInput = () => {
        setSearchImage('')
        setImagesState(imagesState => ({ ...imagesState, prevLoadedImages: [] }))
        setFirstImages(counter)
    }

    const handleKeySubmit = (e) => {
        if (event.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <>
            {loading && <Loader /> }
            <GridContainer>
                <StyledH2>Random Images</StyledH2>

                <ActionGroup>
                    <SearchInput placeholder='Search by author' inputChange={ handleInputChange } iconSubmit={ handleSubmit } keySubmit={ handleKeySubmit } showclose={ searchImage } eraseInput={ handleEraseInput } />
                    <div className="btn-group">
                        <Button active={ currentStyle === 'color' } literal="Color" method={ changePicStyleToColor } buttonStyle="secondary" />
                        <Button active={ currentStyle === 'grayscale' } literal="Grayscale" method={ changePicStyleToGray } buttonStyle="secondary" />
                        <Button active={ currentStyle === 'blur' } literal="Blur" method={ changePicStyleToBlur } buttonStyle="secondary" />
                    </div>
                </ActionGroup>

                <Grid>
                    { imagesState?.imagesToShow?.length ?
                        (imagesState?.imagesToShow?.map((pic, idx) => (
                            <ImageCard
                                key={ pic.order }
                                picId={ pic.order }
                                author={ pic.author }
                                imageUrl={ pic.url }
                                style={ currentStyle }
                            />
                        )
                        )) : (
                            <Message literal='Oops! Nothing to show here!' />
                        )
                    }
                </Grid>
                <Button literal="Load More" method={ morePictures } buttonStyle="outlined" />
            </GridContainer>
        </>
    )
}

Images.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default Images
