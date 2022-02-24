import Pesquisa from "../Pesquisa"
import './Header.css';

function Header() {
  return(
    <header>
      <nav>
        <h3>Codelândia</h3>
        <h3>blog_dh</h3>
      </nav>

      <Pesquisa />
    </header>
  )
}

export default Header