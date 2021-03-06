import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Chip, Container, Grid, Icon, Layout, Section, Typography } from '../components'

import JSIcon from '../public/icons/logos/javascript-logo.svg'
import TSIcon from '../public/icons/logos/typescript-logo.svg'
import JavaIcon from '../public/icons/logos/java-logo.svg'
import SpringIcon from '../public/icons/logos/spring-logo.svg'
import NodejsIcon from '../public/icons/logos/nodejs-logo.svg'
import ReactIcon from '../public/icons/logos/react-logo.svg'
import NextjsIcon from '../public/icons/logos/nextjs-logo.svg'
import DockerIcon from '../public/icons/logos/docker-logo.svg'
import AzureIcon from '../public/icons/logos/azure-logo.svg'
import FirebaseIcon from '../public/icons/logos/firebase-logo.svg'
import GHActionsIcon from '../public/icons/logos/githubactions-logo.svg'
import GitIcon from '../public/icons/logos/github-logo.svg'

const SkillIcons = () => {
    return(
        <Container direction="row" padding="0 60px 60px 60px" mdDown="padding: 30px;">
            <Grid size={120} gap={42}>
                <Icon size={4} label="Javascript (ES6)">
                    <JSIcon />
                </Icon>
                <Icon size={4} label="Typescript">
                    <TSIcon />
                </Icon>
                <Icon size={3} label="Java">
                    <JavaIcon />
                </Icon>
                <Icon size={4} label="Spring Boot">
                    <SpringIcon />
                </Icon>
                <Icon size={4} label="Node.js">
                    <NodejsIcon />
                </Icon>
                <Icon size={4} label="React">
                    <ReactIcon />
                </Icon>
                <Icon size={4} label="Next.js">
                    <NextjsIcon />
                </Icon>
                <Icon size={4} label="Docker">
                    <DockerIcon />
                </Icon>
                <Icon size={4} label="Azure">
                    <AzureIcon />
                </Icon>
                <Icon size={3} label="Firebase">
                    <FirebaseIcon />
                </Icon>
                <Icon size={4} label="Github Actions">
                    <GHActionsIcon />
                </Icon>
                <Icon size={4} label="Git">
                    <GitIcon />
                </Icon>
            </Grid>
        </Container>
    )
}

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Adam Darmawan | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <div>
            <Container padding="180px 0 60px 0" alignItems="center" mdDown="padding: 120px 30px 30px 30px">
                <Container spacing={60} maxWidth="1020px" padding="0 30px 0 30px" mdDown="padding: 0;">
                    <Typography size="h2" weight="black" color="secondary" mdDown="font-size: 48px">About me</Typography>
                    <Typography size="h5" weight="medium" mdDown="font-size: 20px;">
                        I graduated with BA in Information Technology from University of Amikom Yogyakarta in 2021.<br /><br />
                        I&apos;ve been curious about all things programming but that is not until 2017 when I learned programming for the first time that I finally figured out that this is what I want to do professionally.<br /><br />
                        My first programming language is Python, and ever since then I&apos;ve learned a lot and along my journey I&apos;ve created many apps with various technologies such as full stack web apps, automation script for 3d animation, and video games. I&apos;m pretty much comfortable with a variety of technologies.<br /><br />
                        Beside programming, I have a few hobbies which include video & photo editing, graphic design, 3D Modeling & Animation, I dabbles around music and filmmaking, and trying my best to get better in competitive online games.<br /><br />
                        My current interest in technology includes web development, VR/AR, deep learning, and cloud computing. <br /><br />
                        If you are looking for a software engineer who never stops learning and is eager to solve some problems to add to your team, feel free to reach out and say hello! I&apos;m also down to talk about movies, music, video games, and the latest technologies.<br /><br />
                    </Typography>
                </Container>
            </Container>
          </div>
          <div>
          </div>
        </Section>
        <Section>
            <div>
                <Container alignItems="center" mdDown="padding: 0;">
                    <Container padding="0 30px 60px 30px" width="100%" maxWidth="1020px" mdDown="padding: 30px;" spacing={60}>    
                        <Typography size="h2" weight="bold" color="secondary">Skills</Typography>
                        <Typography size="h5" weight="medium" mdDown="font-size: 20px;">
                            Here are some languages, technologies, and tools that I used in my most recent projects:
                        </Typography>
                    </Container>
                </Container>
                <SkillIcons />
                <Container alignItems="center" mdDown="padding: 0;">
                    <Container padding="0 30px 120px 30px" width="100%" maxWidth="1020px" spacing={60} mdDown="padding: 60px 30px 60px 30px;">
                        <Container spacing={24}>
                            <Typography size="h5" weight="medium">Languages</Typography>
                            <Container direction="row" spacing={6} wrap="wrap">
                                <Chip>Javascript (ES6)</Chip>
                                <Chip>Typescript</Chip>
                                <Chip>Java</Chip>
                                <Chip>C#</Chip>
                                <Chip>Python</Chip>
                                <Chip>HTML</Chip>
                                <Chip>CSS</Chip>
                                <Chip>SQL</Chip>
                            </Container>
                        </Container>
                        <Container spacing={24}>
                            <Typography size="h5" weight="medium">Technologies</Typography>
                            <Container direction="row" spacing={6} wrap="wrap">
                                <Chip>React</Chip>
                                <Chip>Redux</Chip>
                                <Chip>Next.js</Chip>
                                <Chip>Spring Boot</Chip>
                                <Chip>Docker</Chip>
                                <Chip>Azure</Chip>
                                <Chip>Firebase</Chip>
                                <Chip>Vercel</Chip>
                                <Chip>Node.js</Chip>
                                <Chip>Express.js</Chip>
                                <Chip>PostgreSQL</Chip>
                                <Chip>MongoDB</Chip>
                            </Container>
                        </Container>
                        <Container spacing={24}>
                            <Typography size="h5" weight="medium">Tools & Methodologies</Typography>
                            <Container direction="row" spacing={6} wrap="wrap">
                                <Chip>Git</Chip>
                                <Chip>Github Actions</Chip>
                                <Chip>Lombok</Chip>
                                <Chip>JUnit</Chip>
                                <Chip>Mockito</Chip>
                                <Chip>Unity</Chip>
                                <Chip>Visual Studio Code</Chip>
                                <Chip>Intellij IDEA</Chip>
                                <Chip>Postman</Chip>
                                <Chip>DBeaver</Chip>
                                <Chip>Material UI</Chip>
                                <Chip>CI/CD</Chip>
                                <Chip>Test Driven Development (TDD)</Chip>
                                <Chip>REST API</Chip>
                                <Chip>NoSQL</Chip>
                                <Chip>Google API (YouTube, Books)</Chip>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </div>
            <div></div>
        </Section>
      </Layout>
    </div>
  )
}

export { SkillIcons };