import { Container, Heading, SimpleGrid, Button, Box } from '@chakra-ui/react'
import Section from '../components/section'
import { PhotoItem } from '../components/grid-item'
import Layout from '../components/article'
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons'
import first from "../public/images/photography/1.jpg";
import second from "../public/images/photography/2.jpg";
import third from "../public/images/photography/3.jpg";
import four from "../public/images/photography/4.jpg";
import five from "../public/images/photography/5.jpg";
import six from "../public/images/photography/6.jpg";
import seven from "../public/images/photography/7.jpg"

const Photography = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={4}>
          Photography
        </Heading>
        <Box align="center" my={4}>
        <NextLink href="https://www.flickr.com/photos/lethamburn" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
                Flickr
              </Button>
            </NextLink>
            </Box>
        <SimpleGrid  gap={2}>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={first}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={second}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={third}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={four}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={five}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={six}/>
          </Section>
          <Section>
           <PhotoItem id="First" title="First" thumbnail={seven}/>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Photography
