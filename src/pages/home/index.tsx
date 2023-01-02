import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size={'4xl'}>Hassle-free scheduling</Heading>
        <Text size={'xl'}>
          Connect your calendar and let people book appointments in their free
          time.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar symbolizing application in operation"
        />
      </Preview>
    </Container>
  )
}
