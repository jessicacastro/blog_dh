import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContext } from '../../context/LoginContext';
import './Login.css'

const LoginPage = (props) => {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const context = useContext(LoginContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (context.user) handleNavigateToPosts()
  })

  const handleNavigateToPosts = () => navigate('/posts')

  const handleLogin = (event) => {
    event.preventDefault();
    
    const { entrarComUsuario } = context;

    entrarComUsuario(usuario)
    navigate('/posts');
  }
 

  return(
    <section>
    <div className="logo">
      <h1>Logo da DH</h1>
    </div>

    <div className="form">
      <form>
        <input type="text" placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
        <input type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
        <button onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  </section>
  )
}

export default LoginPage