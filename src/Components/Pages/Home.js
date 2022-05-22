import React,{useContext} from 'react'
import Blogs from '../Contents/FeaturedBlogs/Blogs';
import { useNavigate } from "react-router-dom";
import MyBlogs from '../Contents/MyBlogs';
import BlogCreated from '../Contents/BlogCreated';
import {AppContext} from "../../Context/AppContext";

const Banner = ()=>{
    const navigate = useNavigate();


    return(
        <div className="flex flex-column  banner " >
            <img src="/images/banner-balckbox.jpg" alt="blog-banner" className="blogbanner" />
            <div className="banner-text-div">

            <h1 className="banner-logo" >QTBlogs</h1>
            <h1>Write your blog now</h1>
            <button className="btn pointer create-btn" onClick={()=>navigate('/create')}>Create</button>
            </div>
        </div>
    )
}


const Home = () => {
    const appContext = useContext(AppContext);
    const [isCreated,setIsCreated] = appContext.value3;
    return (
        <div>
            {isCreated ?<BlogCreated />:''}
            
            <Banner />
            <Blogs />
            <MyBlogs />
        </div>
    )
}

export default Home;
