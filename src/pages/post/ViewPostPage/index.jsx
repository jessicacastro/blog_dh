import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import api from '../../../services/api'
import './ViewPostPage.css'; // não importar não funciona

const ViewPostPage = (props) => {
    const [post, setPost] = useState({})
    const { id } = useParams();

    useEffect(async () => {
        const resposta = await api.get(`/posts/${id}`)
        const postResult = resposta.data
        postResult.createdAt = new Date(postResult.createdAt).toLocaleDateString();
        setPost(postResult);
      }, [])


    return (
        <>
            <Header />
            <main class="post">
                <h1> {post.title} </h1>

                <p>
                    {post.createdAt}
                </p>
                <p>
                    {post.description}
                </p>
            </main>
        </>
    )
}

export default ViewPostPage 