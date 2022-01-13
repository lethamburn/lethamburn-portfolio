import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a Full-Stack Developer based in Madrid!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Antonio Rosales
          </Heading>
          <p>Lethamburn (Bla/Bla/Bla)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
