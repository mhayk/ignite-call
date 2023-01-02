import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size={'sm'} prefix="mhayk.com/" placeholder="your-username" />
      <Button size={'sm'} type="submit">
        Book
        <ArrowRight />
      </Button>
    </Form>
  )
}
