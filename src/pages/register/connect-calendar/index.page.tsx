import { Container, Header } from '../styles'
import { Text, Heading, MultiStep, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import {
  ConnectBox,
  ConnectItem,
} from '@/pages/register/connect-calendar/styles'

export default function Register() {
  // async function handleRegister() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>

        <Text>
          Conecte seu calendario para verificar automaticamente os horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
