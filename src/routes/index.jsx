import { BrowserRouter, Route } from "react-router-dom";
import ListagemPosts from "../components/ListagemPosts";
import ViewPostPage from "../pages/post/ViewPostPage";
import Login from "../pages/Login";

const Routes = () => {
  return(
    <BrowserRouter>
      <Route path="/" component={Login} />
      <Route path="/posts" component={ListagemPosts} />
      <Route path="/posts/:id" component={ViewPostPage} />
    </BrowserRouter>
  )
}

export default Routes