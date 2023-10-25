import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Engenheiro front-end em formação pela Escola Britânica de Artes Criativas
      e Tecnologia (EBAC), cursou engenharia civil pela Universidade Estadual de
      Maringá, possui noções com as linguagens HTML, CSS e Java Script. Tem
      conhecimento em NPM, Bootstrap, BEM, SMACSS, SASS, Babel, SCSS, LESS,
      ES6+, Parcel, TypeScript, Vue.js, Git/GitHub e biblioteca JavaScript:
      Node, jQuery, SASS e React.js. Também tem experiência em construir
      interfaces comunicando com APIs.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ito-0&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ito-0&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
