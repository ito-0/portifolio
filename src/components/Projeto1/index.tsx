import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto1 = () => {
  return (
    <Card>
      <Title>Projeto 1: Landing Page Restaurante Japonês</Title>
      <Paragrafo tipo="secundario">HTML | CSS</Paragrafo>
      <LinkBotao href="https://projeto-1-ebac-5k9z77b3w-ito-0.vercel.app">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto1
