import { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  async function entrarComUsuario(usuario) {
    setUsuario({ 
      id: new Date().getTime(),
      name: usuario
    });
  }

  return(
    <LoginContext.Provider value={{ usuario, entrarComUsuario }}>
      {children}  
    </LoginContext.Provider>
  )
}

export default LoginProvider;