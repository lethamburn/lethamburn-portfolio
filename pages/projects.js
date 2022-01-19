import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/article'
import waveCode from '../public/images/contents/wavecode.png'
import watchflix from "../public/images/contents/watchflix.png"


const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="inkdrop" title="WaveCode" thumbnail={waveCode}>
              Our final project made with React + NodeJs of Upgrade Hub. A lo-fi playlist app with an internal comment box and authentication.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Watchflix"
              title="Watchflix"
              thumbnail={watchflix}
            >
             A PHP watch-list with authentication where each user can add items and have favourite elements.
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
            >
              A markdown note-taking app
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
