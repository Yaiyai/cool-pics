import React from 'react'
import CoolHeader from '../components/CoolHeader/CoolHeader'
import ImageGrid from '../components/ImageGrid/ImageGrid'
import Button from '../components/_ui/Button/Button'
import ImageCard from '../components/_ui/ImageCard/ImageCard'
import CoolPicsLayout from '../layout/CoolPicsLayout'
import { getPictures } from './api/picsum.api'

const Home = ({ firstPictures }) => {

  return (
    <CoolPicsLayout>
      <CoolHeader
        title="Are you bored?"
        subtitle="CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. "
        buttonLiteral="Start Here"
      />
      {firstPictures?.length && <ImageGrid allImages={ firstPictures } /> }
    </CoolPicsLayout>
  )
}

export const getStaticProps = async () => {
  const firstPictures = await getPictures()

  return { props: { firstPictures } }
}


export default Home

