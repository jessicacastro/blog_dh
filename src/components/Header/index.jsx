import { useContext } from 'react';

import Pesquisa from "../Pesquisa"
import './Header.css';
import { Link } from "react-router-dom";
import { LoginContext } from '../../context/LoginContext';

function Header() {
  const contexto = useContext(LoginContext)

  return(
    <header>
      <nav>
        <Link to="/">
          <h3>Codelândia</h3>
        </Link>
        
        <h3>{ contexto.usuario.name }</h3>
      </nav>

      <Pesquisa />
    </header>
  )
}

export default Header