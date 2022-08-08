import Head from 'next/head'
import Image from 'next/image'
import { Card, Chip, Container, Grid, Icon, Layout, LinkButton, Section, Typography } from '../components'

import TomatetoIllustration from '../public/images/projects/tomateto-illustration.png'
import adamscriptScreenshot from '../public/images/projects/adamscript-com_screenshot_square.png'
import autoriggerScreenshot from '../public/images/projects/autorigger_square_screenshot.png'
import libraryScreenshot from '../public/images/projects/library_screenshot_square.png'
import ojekleagueScreenshot from '../public/images/projects/ojekleague_screenshot_square.png'
import sheepofflineScreenshot from '../public/images/projects/sheepoffline_screenshot_square.png'

import TypescriptIcon from '../public/icons/logos/typescript-logo.svg'
import ReactIcon from '../public/icons/logos/react-logo.svg'
import ReduxIcon from '../public/icons/logos/redux-logo.svg'
import FirebaseIcon from '../public/icons/logos/firebase-logo.svg'
import JavaIcon from '../public/icons/logos/java-logo.svg'
import SpringIcon from '../public/icons/logos/spring-logo.svg'
import DockerIcon from '../public/icons/logos/docker-logo.svg'
import AzureAppServiceIcon from '../public/icons/logos/azureappservice-logo.svg'
import AzurePostgreSQLIcon from '../public/icons/logos/azuredatabase-logo.svg'

const FeaturedProject = () => {
  return(
    <Container direction="row" width="100%" spacing={96} mdDown="padding: 30px 0 0 0; flex-direction: column-reverse; gap: 30px;">
      <Container spacing={24}>
        <Container spacing={4}>
          <Typography size="caption" color="secondary" weight="bold" slab>Featured Project</Typography>
          <Typography size="h4" weight="black">Tomateto</Typography>
        </Container>
        <Typography weight="medium">
          Tomateto is a full-stack social media web application. It consists of two main parts: a React app and a REST API (with a database).
        </Typography>
        <ul>
          <li>
          <Typography weight="medium">Tomateto React</Typography>
          <br /><br />
          <Typography weight="medium">A social media web application powered by React and provides main functionalities such as creating new posts, liking a post, following a user, etc. With this web app you can interact and show data requested from Tomateto API through user interface.</Typography>
          </li>
          <br /><br />
          <li>
          <Typography weight="medium">Tomateto API</Typography>
          <br /><br />
          <Typography weight="medium">A social media REST API written in Java and powered by Spring Boot. It provides endpoints such as creating a new post, liking a post, following a user, etc. This API acts as a bridge between the Tomateto React web app and the PostgreSQL database. Hosted with Azure App Service and run within a Docker container.</Typography>
          </li>
        </ul>

        <Container direction="row" spacing={18} wrap>
          <Icon size={2} label="Typescript" hideLabel>
            <TypescriptIcon />
          </Icon>
          <Icon size={2} label="React" hideLabel>
            <ReactIcon />
          </Icon>
          <Icon size={2} label="Redux" hideLabel>
            <ReduxIcon />
          </Icon>
          <Icon size={2} label="Firebase" hideLabel>
            <FirebaseIcon />
          </Icon>
          <Icon size={2} label="Java" hideLabel>
            <JavaIcon />
          </Icon>
          <Icon size={2} label="Spring Boot" hideLabel>
            <SpringIcon />
          </Icon>
          <Icon size={2} label="Docker" hideLabel>
            <DockerIcon />
          </Icon>
          <Icon size={2} label="Azure App Service" hideLabel>
            <AzureAppServiceIcon />
          </Icon>
          <Icon size={2} label="Azure Database for PostgreSQL" hideLabel>
            <AzurePostgreSQLIcon />
          </Icon>
        </Container>

        <Container direction="row" width="100%" spacing={32}>
          <LinkButton href="https://tomateto.com" width="100%">Visit Tomateto</LinkButton>
          <LinkButton href="https://github.com/adamscript/tomateto-react" width="100%">View on Github</LinkButton>
        </Container>
      </Container>

      <Container>
        <Image src={TomatetoIllustration} alt="Illustration of Tomateto" priority />
      </Container>

    </Container>
  )
}

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Adam Darmawan | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <div>
          <Container padding="120px 0 0 0" alignItems="center" width="100%" mdDown="padding: 30px; gap: 30px;">
            <Container spacing={60} maxWidth="1020px" padding="0 30px 0 30px" mdDown="padding: 0;">
              <Container width="100%" padding="60px 0 0 0" mdDown="padding: 80px 0 0 0;">
                <Typography size="h2" weight="black" color="secondary" mdDown="font-size: 48px">Projects</Typography>
              </Container>
              <FeaturedProject />
            </Container>
          </Container>
          <Container padding="120px 0" mdDown="padding: 30px;" direction="row">
            <Grid gap={30} size={360}>
              <Card href="https://github.com/adamscript/adamscript-com" src={adamscriptScreenshot}>
                <p>adamscript-com</p>
                <p>First iteration of my personal website built with Next.js and hosted with Vercel.</p>
                <div>
                  <Container direction="row" spacing={6} wrap>
                    <Chip>Javascript</Chip>
                    <Chip>React</Chip>
                    <Chip>Next.js</Chip>
                    <Chip>styled-components</Chip>
                  </Container>
                </div>
              </Card>
              <Card href="https://github.com/adamscript/Auto-Rigger" src={autoriggerScreenshot}>
                <p>Auto Rigging Toolkit for Autodesk Maya</p>
                <p>This tool will help you build a 3D character rig without building it yourself from scratch. It will save you hours if not days of rigging work.</p>
                <div>
                  <Container direction="row" spacing={6} wrap>
                    <Chip>Python</Chip>
                    <Chip>PySide</Chip>
                    <Chip>Autodesk Maya</Chip>
                  </Container>
                </div>
              </Card>
              <Card href="https://github.com/adamscript/library" src={libraryScreenshot}>
                <p>Library</p>
                <p>A web app to keep you on track of books that you read.</p>
                <div>
                  <Container direction="row" spacing={6} wrap>
                    <Chip>Javascript</Chip>
                    <Chip>HTML</Chip>
                    <Chip>CSS</Chip>
                    <Chip>Google Books API</Chip>
                  </Container>
                </div>
              </Card>
              <Card href="4" src={ojekleagueScreenshot}>
                <p>Ojek League</p>
                <p>Imagine a soccer game, but with taxi bikes and a giant ball. Ojek League is a vehicular soccer game inspired by Rocket League and built with Unity game engine.</p>
                <div>
                  <Container direction="row" spacing={6} wrap>
                    <Chip>Unity</Chip>
                    <Chip>C#</Chip>
                  </Container>
                </div>
              </Card>
              <Card href="5" src={sheepofflineScreenshot}>
                <p>Sheep Offline</p>
                <p>A simple endless runner game inspired by Google Chrome Dinosaur Game and built with Unity game engine.</p>
                <div>
                  <Container direction="row" spacing={6} wrap>
                    <Chip>Unity</Chip>
                    <Chip>C#</Chip>
                  </Container>
                </div>
              </Card>
            </Grid>
          </Container>
          </div>
          <div></div>
        </Section>
      </Layout>
    </div>
  )
}

export { FeaturedProject };