import React from 'react'
import CoolHeader from '../components/CoolHeader/CoolHeader'
import ImageGrid from '../components/ImageGrid/ImageGrid'
import Button from '../components/_ui/Button/Button'
import ImageCard from '../components/_ui/ImageCard/ImageCard'
import CoolPicsLayout from '../layout/CoolPicsLayout'
import { getPictures } from './api/picsum.api'

const Home = ({ cleanImages }) => {

  return (
    <CoolPicsLayout>
      <CoolHeader
        title="Are you bored?"
        subtitle="CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. "
        buttonLiteral="Start Here"
      />
      {cleanImages?.length && <ImageGrid allImages={ cleanImages } /> }
    </CoolPicsLayout>
  )
}

export const getStaticProps = async () => {
  const firstPictures = await getPictures()
  const cleanImages = []

  firstPictures.forEach((pix, idx) => {
    cleanImages.push({ author: pix.author, order: idx + 1 < 10 ? `#0${idx + 1}` : `#${idx + 1}`, url: `https://picsum.photos/id/${pix.id}/400` })
  })

  return { props: { cleanImages } }
}


export default Home

