import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import CreateBlog from './Components/Pages/CreateBlog';
import MyBlog from "./Components/Pages/MyBlog";
import Footer from "./Components/Contents/Footer/Footer";
import './App.css';
import './Components/Pages/styles/Blogs.css';
import "./Components/Pages/styles/CreateBlog.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="flex align-items">

      <div className="logo-div pointer" onClick={()=>navigate('/')}>
        <img src="/images/logo.png" className="logo-image" alt="logo-img" />
        <h2 className="logo-text">QTBLOGS</h2>
      </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs/:id" element={<Blog />} />
        <Route exact path="/myblogs/:id" element={<MyBlog />} />
        <Route exact path="/create" element={<CreateBlog />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
