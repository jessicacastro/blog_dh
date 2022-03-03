import React from 'react';
import './App.css';
import Header from './components/Header'
import ListagemPosts from './components/ListagemPosts'
import { Routes, Route } from "react-router-dom";

import ViewPostPage from './pages/post/ViewPostPage'

const App = () => {

  return(
    <>
      <Header />
    
      <Routes>
        <Route path="/" element={<ListagemPosts />} />
        <Route path="/posts/:id" element={<ViewPostPage />} />

      </Routes>

    </>
  )
}

export default App;