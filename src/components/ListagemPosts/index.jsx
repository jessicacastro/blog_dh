
import { useState, useEffect } from "react"
import api from '../../services/api'
import Post from "../Post"
import Header from '../Header'
import './ListagemPosts.css'

const ListagemPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/posts')
      .then((resposta) => setPosts(resposta.data))
      .catch((erro) => console.log(erro))
  }, [])

  return(
    <>
      <Header />
      <main>
      {
        posts.map((post) => 
          <Post 
            key={post.id} 
            titulo={post.title} 
            descricao={post.description}
            data={post.createdAt}
            id={post.id}
          />
        )
      }
    </main>
    </>
  )
}

export default ListagemPosts