
import { useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../services/api'
import Button from '../Button'
import coracaoImg from '../../assets/coracao.svg'

import './Post.css'

const Post = (props) => {
  const [post, setPost] = useState(null)

  const data = new Date(props.data).toLocaleDateString();

  const handleClickLeiaMais = async () => {
    const resposta = await api.get(`/posts/${props.id}`)
    
    setPost(resposta.data);
  }

  const handleClickLerMenos = () => {
    setPost(null)
  }

  const resultado = -1 > 0 ? 'É maior que zero' : 'É menor que zero';
  console.log(resultado)

  return(
    <>
    {
      post ? 
        (
          <article>
             <Button 
              conteudo="Ler menos" 
              onClick={handleClickLerMenos} 
            />

            <div className="caixa">
              <span>{data}</span>

              <img src={coracaoImg} alt="Curtir" />
            </div>

            <h3>{post.title}</h3>

            <p>
              {post.description}
            </p>

            <br />
            <p>
              <strong>
                Post feito por Ian
              </strong>
            </p>
          </article>
        )
      : 
        (
          <article>
            <div className="caixa">
              <span>{data}</span>

              <img src={coracaoImg} alt="Curtir" />
            </div>

            <h3>{props.titulo}</h3>

            <Button conteudo="Leia mais" onClick={handleClickLeiaMais} />
          </article>
        )

    }
    </>
  )
}

Post.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string
}


export default Post