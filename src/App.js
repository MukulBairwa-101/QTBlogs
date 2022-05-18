import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import CreateBlog from './Components/Pages/CreateBlog';
import MyBlog from "./Components/Pages/MyBlog";
import './App.css';
import './Components/Pages/styles/Blogs.css';
import "./Components/Pages/styles/CreateBlog.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="logo-div pointer" onClick={()=>navigate('/')}>
        <img src="/images/logo.png" className="logo-image" />
        <h2 className=""  >QTBlogs</h2>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs/:id" element={<Blog />} />
        <Route exact path="/myblogs/:id" element={<MyBlog />} />
        <Route exact path="/create" element={<CreateBlog />} />
      </Routes>

    </div>
  );
}

export default App;
