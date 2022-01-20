import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" mt={4}>Not found</Heading>
      <Text>These aren`&apos;`t the pages you`&apos;`re looking for...</Text>
      <Divider my={6} />
      <Image src="/images/contents/obi.jpg" width="600px" height="250" />
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="gray">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
