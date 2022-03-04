import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import ListagemPosts from './components/ListagemPosts'

import ViewPostPage from './pages/post/ViewPostPage'
import LoginPage from './pages/Login';
import LoginProvider from './context/LoginContext';

const App = () => {
  return(
    <div className="pages">
    <LoginProvider>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/posts" element={<ListagemPosts />} />
          <Route path="/posts/:id" element={<ViewPostPage />} />
      </Routes>
    </LoginProvider>


    </div>
  )
}

export default App;