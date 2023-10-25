import Projeto5 from '../../components/Projeto5'
import Projeto4 from '../../components/Projeto4'
import Title from '../../components/Title'

import { Lista } from './styles'
import Projeto3 from '../../components/Projeto3'
import Projeto2 from '../../components/Projeto2'
import Projeto1 from '../../components/Projeto1'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto5 />
      </li>
      <li>
        <Projeto4 />
      </li>
      <li>
        <Projeto3 />
      </li>
      <li>
        <Projeto2 />
      </li>
      <li>
        <Projeto1 />
      </li>
    </Lista>
  </section>
)

export default Projetos
