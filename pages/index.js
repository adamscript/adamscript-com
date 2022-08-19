import Head from 'next/head'
import Image from 'next/image';
import Typed from 'typed.js'
import styled from 'styled-components';

import { LinkButton, Container, Layout, Section, Typography, HighlightTypography, LinkTypography } from '../components';
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
          <div>
            <Container alignItems="center" height="100vh" justifyContent="center" spacing={6}>
              <Typography size="caption" color="grey" slab>{`<Home />`}</Typography>
            </Container>
          </div>
        </Section>
        <Section>
          <div>
            <Container width="100%" alignItems="center">
              <Container maxWidth="960px" padding="60px 30px" spacing={60}>
                <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">About me</Typography>
                <Container direction="row" spacing={60} mdDown="flex-direction: column-reverse;">
                    <Container flex="auto" spacing={60} maxWidth="540px" mdDown="max-width: 100%;">
                        <Typography weight="medium">
                            Hello again! I&apos;m mostly known as Aji but you can call me Adam, whichever you&apos;re most comfortable with. <br /><br />
                            I enjoy learning new things, solving problems, and building stuff, especially the ones that you can interact with.
                            So far I&apos;ve built two <LinkTypography href="https://play.unity.com/u/adamscript" external>video games</LinkTypography>, an <LinkTypography href="https://github.com/adamscript/Auto-Rigger" external>automation script</LinkTypography>, a few websites, and a <LinkTypography href="https://tomateto.com" external>social media web app</LinkTypography>. <br /><br />
                            I have knowledge in <HighlightTypography>single-page applications (SPA), cloud deployment, containers, REST API, test-driven development (TDD)</HighlightTypography>, and <HighlightTypography>CI/CD</HighlightTypography>.<br /><br />
                            I have deployed and currently maintaining my latest project, a social media web app <LinkTypography href="https://tomateto.com">Tomateto</LinkTypography>, where I put these knowledge to practice.
                        </Typography>
                    </Container>
                    <Container flex="auto" alignItems="center" justifyContent="center" width="100%">
                        <StyledImage width="240px" height="240px" src={selfPortrait} />
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
            <Container width="100%" alignItems="center" padding="0 0 30px">
              <LinkButton width="160px" href="/about" outlined>
                Learn More
              </LinkButton>
            </Container>
          </div>
            <Container alignItems="center" padding="60px 0">
              <Typography size="caption" color="grey" slab>{`<About />`}</Typography>
            </Container>
          <div />
        </Section>
        <Section>
          <div>
            <Container width="100%" alignItems="center">
              <Container maxWidth="1020px" padding="60px 30px" spacing={30}>
                <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">Stuff I&apos;ve Built</Typography>
                <FeaturedProject />
                <Container width="100%" alignItems="center">
                  <LinkButton width="160px" href="/projects" outlined>
                    Show All Projects
                  </LinkButton>
                </Container>
              </Container>
            </Container>
          </div>
          <div>
            <Container alignItems="center" padding="60px 0">
              <Typography size="caption" color="grey" slab>{`<Projects />`}</Typography>
            </Container>
          </div>
        </Section>
        <Section>
          <div>
            <Container width="100%" alignItems="center" padding="60px 30px 160px" spacing={30}>
              <Typography size="h4" weight="black" color="secondary" mdDown="font-size: 34px">Get In Touch</Typography>
              <Container maxWidth="600px">
                <Typography weight="medium" textAlign="center">
                  Glad you made it here. Hope you like what you saw. If you got an opportunity to talk about, something you&apos;d like to ask, or just want to talk about movies and video games, feel free to reach out!
                </Typography>
              </Container>
                <LinkButton href="/contact" width="120px">
                  Say Hello
                </LinkButton>
            </Container>
          </div>
          <div>
            <Container alignItems="center" padding="60px 0">
              <Typography size="caption" color="grey" slab>{`<Contact />`}</Typography>
            </Container>
          </div>
        </Section>
      </Layout>
    </div>
  )
}
