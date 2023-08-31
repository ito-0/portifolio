import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Title>Projeto Listas de tarefas</Title>
      <Paragrafo tipo="secundario">
        Lista de tarefas realizada com VueJS
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
