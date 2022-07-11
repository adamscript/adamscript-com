import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import { Layout, Section } from '../components/Layout'
import Typography from '../components/Typography'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <div>
            <Typography size="h6" color="secondary">Hello World h6</Typography>
            <Typography size="h5" weight="bold">Hello World h5</Typography>
            <Typography size="h2" weight="black">Hello World h2</Typography>
            <Typography size="caption" weight="light" slab>Hello World caption text</Typography>
            <Button color="black" width="98px"><Typography weight="bold">Click me</Typography></Button>
            <Typography>Hello World body</Typography>
          </div>
          <div></div>
        </Section>
      </Layout>
    </div>
  )
}
