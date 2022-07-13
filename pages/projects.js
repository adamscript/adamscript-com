import Head from 'next/head'
import { Layout, Section } from '../components/Layout'
import Typography from '../components/Typography'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Tomateto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <div>
            <Typography size="h2" weight="black" color="secondary">Projects</Typography>
          </div>
          <div></div>
        </Section>
      </Layout>
    </div>
  )
}