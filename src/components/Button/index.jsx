const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.conteudo}</button>
  )
}

Button.defaultProps = {
  conteudo: 'Ver mais'
}

export default Button