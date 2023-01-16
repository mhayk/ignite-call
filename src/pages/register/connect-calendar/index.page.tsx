import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  const session = useSession()
  console.log(session)
  //   async function handleRegister(data: RegisterFormData) {}
  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your agenda !</Heading>
        <Text>
          Connect your calendar to automatically check busy hours and new events
          as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
