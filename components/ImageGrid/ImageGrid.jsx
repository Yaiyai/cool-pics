import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../_ui/Container/Container'
import ImageCard from '../_ui/ImageCard/ImageCard'
import H2 from '../_ui/Titles/H2'

const Grid = styled.section`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 40px 0 144px;

`


const ImageGrid = ({ allImages }) => {
    return (
        <Container>
            <H2 title="Random Images" />
            <Grid>
                {
                    allImages?.map((pic, idx) => <ImageCard
                        key={ pic.id }
                        picId={ idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}` }
                        author={ pic.author }
                        imageUrl={ `https://picsum.photos/id/${pic.id}/400/?random=1` }
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
