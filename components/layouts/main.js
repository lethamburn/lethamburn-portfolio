import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box
      as="main"
      pb={8}
      backgroundImage="url('/images/background.png')"
      backgroundRepeat="repeat"
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="theme-color" content="#FF8906" />
        <meta
          name="description"
          content="Web developer passionate about science fiction, photography, comics, video games, death metal, and 3D printing. Visit my GitHub to see my work."
        />

        <link rel="shortcut icon" href="/images/contents/avatar.png" />
        <title>Antonio Rosales - Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
