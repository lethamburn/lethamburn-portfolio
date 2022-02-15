import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Lottie from 'react-lottie'
import animationData from '../public/lotties/falcon.json'
import Layout from '../components/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { LoveSection, LoveEmoji } from '../components/love'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import gitHub from '../public/images/github.png'
import miniCode from '../public/images/minicode.png'

const Page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={6} mb={6}>
          <Box flexGrow={1} mt={3} mb={3}>
            <Heading as="h2" variant="page-title">
              Antonio Rosales
            </Heading>
            <p>Front-end Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/logo.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I love science fiction, photography, comics, video games, death
            metal and 3D printing. This is my{' '}
            <NextLink href="www.github.com/lethamburn">
              <Link>GitHub</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
                My projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Box mb={6} textAlign="center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Málaga, (Spain)
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>
            Completed Image Technician Grade in Jesús Marín Polytechnic School{' '}
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Started Multi-Platform Development Degree in Cesur vocational
            training School
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Moved to Madrid
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Full-Stack Development Bootcamp in Upgrade Hub
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works as a freelance developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <LoveSection>
            <LoveEmoji>⚙️</LoveEmoji>
            <Link href="https://ko-fi.com/lethamburn">3D Printing</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>💭</LoveEmoji>
            Comicbooks
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎮</LoveEmoji>
            <Link href="http://www.stayawake.es/">Videogames</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎸</LoveEmoji>
            Death Metal
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎞️</LoveEmoji>
            <Link href="https://letterboxd.com/lethamburn/">Movies</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>👽</LoveEmoji>
            Science Fiction
          </LoveSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/lethamburn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @lethamburn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/lethamburn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @lethamburn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/lethamburn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @lethamburn
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2]} gap={6} mt={8}>
            <ProjectGridItem
              id="GitHub"
              title="GitHub"
              thumbnail={gitHub}
              link="https://github.com/lethamburn"
            ></ProjectGridItem>
            <ProjectGridItem
              id="Mini Code Lab"
              title="Mini Code Lab"
              thumbnail={miniCode}
              link="https://minicodelab.dev"
            ></ProjectGridItem>
          </SimpleGrid>
        </Section>
      {/*   <Box flexGrow={1} mt={3} mb={3} align="center">
            <footer>Props to craftzdog and his YouTube channel</footer>
          </Box> */}
      </Container>
    </Layout>
  )
}

export default Page
