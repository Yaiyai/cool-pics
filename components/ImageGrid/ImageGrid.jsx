import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../_ui/Container/Container'
import ImageCard from '../_ui/ImageCard/ImageCard'
import H2 from '../_ui/Titles/H2'
import Button from '../_ui/Button/Button'

const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 40px 0 144px;

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

    return (
        <Container>
            <H2 title="Random Images" />
            <Grid>
                {
                    gridState?.imagesToShow?.map((pic, idx) => <ImageCard
                        key={ pic.id }
                        picId={ idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}` }
                        author={ pic.author }
                        imageUrl={ `https://picsum.photos/id/${pic.id}/400/?random=1` }
                    />)
                }
            </Grid>
            <Button literal="Load More" method={ morePictures } buttonStyle="primary" />
        </Container>
    )
}

ImageGrid.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default ImageGrid
