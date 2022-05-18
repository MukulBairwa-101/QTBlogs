import React from 'react'
import Blogs from '../Contents/FeaturedBlogs/Blogs';
import { useNavigate } from "react-router-dom";
import MyBlogs from '../Contents/MyBlogs';

const Banner = ()=>{
    const navigate = useNavigate();
    return(
        <div className="flex flex-column align-items banner" >
            <h1 className="banner-logo" >QTBlogs</h1>
            <h1>Write your blog now</h1>
            {/* <div className="btn-create-div"> */}

            <button className="btn pointer create-btn" onClick={()=>navigate('/create')}>Create</button>
            {/* </div> */}
        </div>
    )
}


const Home = () => {
    return (
        <div>
            <Banner />
            <Blogs />
            <MyBlogs />
        </div>
    )
}

export default Home;
