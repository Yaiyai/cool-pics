import React from 'react'
import CoolPicsLayout from '../layout/CoolPicsLayout'
import { getPictures } from './api/picsum.api'

const Home = ({ firstPictures }) => {
  return (
    <CoolPicsLayout>
      soy un container
    </CoolPicsLayout>
  )
}

export const getStaticProps = async () => {
  const firstPictures = await getPictures()

  return { props: { firstPictures } }
}


export default Home

