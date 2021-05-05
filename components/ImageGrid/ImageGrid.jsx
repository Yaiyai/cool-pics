import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../_ui/Container/Container'
import ImageCard from '../_ui/ImageCard/ImageCard'

const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content: space-between;

`


const ImageGrid = ({ allImages }) => {
    return (
        <Container>
            <Grid>
                {
                    allImages?.map((pic, idx) => <ImageCard
                        key={ pic.id }
                        picId={ idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}` }
                        author={ pic.author }
                        imageUrl={ `https://picsum.photos/id/${pic.id}/400/?grayscale&random=1` }
                    />)
                }
            </Grid>
        </Container>
    )
}

ImageGrid.propTypes = {
    allImages: PropTypes.array.isRequired
}

export default ImageGrid
