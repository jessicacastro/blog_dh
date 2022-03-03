import Pesquisa from "../Pesquisa"
import './Header.css';
import { Link } from "react-router-dom";
function Header() {
  return(
    <header>
      <nav>
        <Link to="/">
          <h3>Codelândia</h3>
        </Link>
        
        <h3>blog_dh</h3>
      </nav>

      <Pesquisa />
    </header>
  )
}

export default Header