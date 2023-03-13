import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/article'
import waveCode from '../public/images/contents/wavecode.png'
import stark from '../public/images/contents/stark.png'
import watchflix from '../public/images/contents/watchflix.png'
import starWars from '../public/images/contents/sw.png'
import animalCrossing from '../public/images/contents/animal.jpg'
import gameofThrones from '../public/images/contents/game.jpg'
import comicBook from '../public/images/contents/comic.jpg'
import star from '../public/images/contents/star.jpg'
import peterGram from '../public/images/contents/insta.png'
import dayseeker from '../public/images/contents/dayseeker.png'
import mars from '../public/images/contents/mars.png'
import tlou from '../public/images/contents/tlou.png'
import fallen from '../public/images/contents/fallen.png'
import codepen from '../public/images/contents/codepen.png'
const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              id="Star Wars Databank"
              title="Star Wars Databank"
              thumbnail={starWars}
              link="https://starwars-databank.vercel.app/"
            >
              The Star Wars Databank API is a REST API based on the galatic saga
              Star Wars.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Dayseeker"
              title="Dayseeker"
              thumbnail={dayseeker}
              link="https://dayseeker.vercel.app/"
            >
              A Replica of the Dayseeker band website.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Star Wars: Jedi Fallen Order"
              title="Star Wars: Jedi Fallen Order"
              thumbnail={fallen}
              link="https://jedi-fallen-order.vercel.app/"
            >
              A landing page for the videogame Star Wars: Jedi Fallen Order
              based on few Behance designs.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Codepen guides"
              title="Codepen guides"
              thumbnail={codepen}
              link="https://codepen.io/lethamburn"
            >
              Some HTML5, CSS3 and JavaScript basic guidelines, tips and tricks.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="Mars Rover"
              title="Mars Rover"
              thumbnail={mars}
              link="https://react-mars-rover.vercel.app/"
            >
              A Mars Rover app to view the images captured by the three most
              popular Rovers over Mars trough the NASA API.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="The Last of Us"
              title="The Last of Us"
              thumbnail={tlou}
              link="https://react-the-last-of-us.vercel.app/"
            >
              A landing page for the videogame The Last of Us based on few
              Behance designs.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="WaveCode"
              title="WaveCode"
              thumbnail={waveCode}
              link="https://github.com/lethamburn/react_wavecode_front"
            >
              Our final project made with React + NodeJs of Upgrade Hub. A lo-fi
              playlist app with an internal comment box and authentication.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Watchflix"
              title="Watchflix"
              thumbnail={watchflix}
              link="https://github.com/lethamburn/php_watchflix"
            >
              A PHP watch-list with authentication where each user can add items
              and have favourite elements.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="PeterGram"
              title="PeterGram"
              thumbnail={peterGram}
              link="https://github.com/lethamburn"
            >
              An imitation of Instagram made with React and Firebase about
              Spider-man.{' '}
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="Animal Crossing"
              title="Animal Crossing"
              thumbnail={animalCrossing}
              link="https://github.com/lethamburn/angular_AC"
            >
              A cute Angular front client for the AC API.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Game of Thrones"
              title="Game of Thrones"
              thumbnail={gameofThrones}
              link="https://github.com/lethamburn/angular_Game_of_Thrones"
            >
              A team Angular project with the GOT TV show API.
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="Comic Book Shop"
              title="Comic Book Shop"
              thumbnail={comicBook}
              link="https://github.com/lethamburn/node_Comic_book-shop"
            >
              A Comic Book Shop project with JS and NodeJs with authentication
              and user comic and manga own collections.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Star Wars Starships"
              title="Star Wars Starships"
              thumbnail={star}
              link="https://github.com/lethamburn/js_StarWars_Starships"
            >
              My first vanilla JS project about adding and removing Star Wars
              starships from a collection, another kind of TODO list.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="Stark Industries"
              title="Stark Industries"
              thumbnail={stark}
              link="https://github.com/lethamburn/stark_industries"
            >
              A simple showcase of Iron Man suits on React.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
