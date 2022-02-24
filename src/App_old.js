import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const professor = ''
  const descricaoDaImagem = 'Logo do react'
  const listaDeLinguagens = ['Javascript', 'Java', 'PHP', 'Python']

  // const alerta = (event) => {
  //   // event.preventDefault();
  //   alert('Oi do alerta 1')
  //   return 'Retorno do Alerta 1'
  // }

  // const alertaDois = alerta()

  const renderizaInput = (evento) => {
    console.log(evento.target.value)
    // aluno = evento.target.value;
  }

  return (
    <>
      {/* <button type="submit" onClick={(event) => alerta(event)}>Clica aí!</button> */}
      <input type="text" onChange={renderizaInput} />
      <img className="logo" src={logo} alt={descricaoDaImagem} />
      {
        professor ? 
          <h1 className="titulo">Olá, {professor}!</h1>
          : <h1>Olá, dev!</h1>
      }
      <h2>Eu estou na Digital House!</h2>

      <ul>
        {
          listaDeLinguagens.map((linguagem, index) => <li key={index}>{index} - {linguagem}</li>)
        }
      </ul>
    </>
  );
}

export default App;
