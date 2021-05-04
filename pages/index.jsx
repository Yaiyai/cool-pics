import React from 'react'
import CoolHeader from '../components/CoolHeader/CoolHeader'
import Button from '../components/_ui/Button/Button'
import CoolPicsLayout from '../layout/CoolPicsLayout'
import { getPictures } from './api/picsum.api'

const Home = ({ firstPictures }) => {
  const starHereButton = () => alert('hola')
  
  return (
    <CoolPicsLayout>
      <CoolHeader 
      title="Are you bored?" 
      subtitle="CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. " 
      buttonLiteral="Start Here"
      buttonMethod={starHereButton} 
      />
    </CoolPicsLayout>
  )
}

export const getStaticProps = async () => {
  const firstPictures = await getPictures()

  return { props: { firstPictures } }
}


export default Home

