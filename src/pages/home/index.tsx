import React from 'react'
import Head from 'next/head'

import Container from '../../components/Container'
import TopContent from './topContent'
import Introdution from './introdution'
import MyClients from './myClients'
import Faq from './faq'
import Footer from '../../components/Footer'
import Projects from './projects'

const Home: React.FC = () => (
  <>
    <Container>
      <Head>
        <title>Dionei Bianchati</title>
      </Head>
      <TopContent />
      <Introdution />
      <MyClients />
      <Projects />
      <Faq />
    </Container>
    <Footer />
  </>
)

export default Home
