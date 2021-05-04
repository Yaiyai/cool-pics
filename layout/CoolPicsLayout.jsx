import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Container from '../components/_ui/Container/Container'

const CoolPicsLayout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name="copyright" content="yaidev.tech" />
                <meta name="author" content="yaidev.tech" />

                <title>CoolPics || Cool Pics</title>
            </Head>
            <NavBar />
            <Container>

                <main>{ children }</main>
            </Container>
            <Footer />
        </>
    )
}

export default CoolPicsLayout
