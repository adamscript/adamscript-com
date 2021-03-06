import Head from 'next/head'
import Image from 'next/image';
import Typed from 'typed.js'
import styled from 'styled-components';

import { Button, Chip, Container, Icon, Layout, Section, Typography } from '../components';
import { useEffect, useRef } from 'react'

import selfPortrait from '../public/images/selfportrait.jpg'
import { SkillIcons } from './about';
import { FeaturedProject } from './projects';

const StyledImage = styled(Image)`
    border-radius: 30px;
`;

const WelcomeText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  return(
    <>
      <Typography color="secondary" weight="bold" size="h6" slab>Hi, my name is Adam</Typography><br />
      <Typography weight="medium" size="h2" mdDown="font-size: 48px;">I&apos;m a <span style={{ fontWeight: 900 }}>software developer</span></Typography>
      <Typography weight="medium" size="h2" mdDown="font-size: 48px;">and <span ref={el} /></Typography>

      <div id="typed-strings">
        <p>I built Tomateto</p>
        <p>I build websites</p>
        <p>I made video games</p>
        <p>I wrote a script for 3D Animation</p>
        <p>I am learning web development</p>
        <p>I love technologies</p>
        <p>I love movies</p>
        <p>I love video games</p>
        <p>I love music</p>
        <p>I love cats</p>
        <p>I love you</p>
      </div>
    </>
  )
}

export default function Home() {

  return (
    <div>
      <Head>
        <title>Adam Darmawan | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <div>
            <Container height="100vh" justifyContent="center" padding="30px">
              <WelcomeText />
            </Container>
          </div>
          <div></div>
        </Section>
        <Section>
          <div>
            <Container width="100%" alignItems="center">
              <Container maxWidth="960px" padding="60px 30px" spacing={60}>
                <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">Who Am I?</Typography>
                <Container direction="row" spacing={60} mdDown="flex-direction: column-reverse;">
                    <Container flex="auto" spacing={60} maxWidth="540px" mdDown="max-width: 100%;">
                        <Typography size="h6" weight="medium" mdDown="font-size: 20px;">
                            Hello again! I&apos;m mostly known as Aji but you can call me Adam, whichever you prefer really. <br /><br />
                            I enjoy learning new things, solving problems, and making stuff especially the ones that you can interact with.<br /><br />
                            So far I&apos;ve built 2 video games, a script that I used to aid my 3D animation character creation, a few websites, and a social media web app. Through these projects I&apos;m able to learn about single page apps, responsive design, cloud, containers, REST API, Test Driven Development, CI/CD, and I strive to learn more.<br /><br />
                            My goal is to utilize the things I&apos;ve learned to help bring ideas to life.
                        </Typography>
                    </Container>
                    <Container flex="auto" alignItems="center" justifyContent="center" width="100%">
                        <StyledImage width="300px" height="300px" src={selfPortrait} />
                    </Container>
                </Container>
              </Container>
            </Container>
            <Container padding="30px 30px 60px 30px" alignItems="center" justifyContent="center" width="100%">
              <Typography size="h6" weight="medium" mdDown="font-size: 20px;">
                  Here are some languages, technologies, and tools that I used in my most recent projects:
              </Typography>
            </Container>
            <SkillIcons />
            <Container width="100%" alignItems="center">
              <Container maxWidth="960px" padding="60px 30px" spacing={30}>
                <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">Stuff I&apos;ve Built</Typography>
                <FeaturedProject />
                <Container width="100%" alignItems="center">
                  <Button width="160px" outlined>
                    Show All Projects
                  </Button>
                </Container>
              </Container>
            </Container>
            <Container width="100%" alignItems="center" padding="60px 30px 160px" spacing={30}>
              <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">Get In Touch</Typography>
              <Container maxWidth="600px">
                <Typography weight="medium" textAlign="center">
                  Glad you made it here. Hope you like what you saw. If you got an opportunity to talk about, something you&apos;d like to ask, or just want to talk about movies and video games, feel free to reach out!
                </Typography>
              </Container>
                <Button width="120px">
                  Say Hello
                </Button>
            </Container>
          </div>
          <div />
        </Section>
      </Layout>
    </div>
  )
}
