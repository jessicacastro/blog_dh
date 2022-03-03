import PropTypes from 'prop-types'
import Button from '../Button'
import coracaoImg from '../../assets/coracao.svg'
import { Link } from "react-router-dom";
import './Post.css'

const Post = (props) => {
  const data = new Date(props.data).toLocaleDateString();

  return (
    <article>
      <div className="caixa">
        <span>{data}</span>

        <img src={coracaoImg} alt="Curtir" />
      </div>

      <h3>{props.titulo}</h3>

      <Link to={`/posts/${props.id}`}>
        <Button conteudo="Leia mais" />
      </Link>
    </article>
  )
}

Post.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string
}

export default Post