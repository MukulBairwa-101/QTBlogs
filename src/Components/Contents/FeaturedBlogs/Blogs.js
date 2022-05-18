import React,{useState,useEffect,useContext} from 'react'
import data from "../../../Assets/data";
import {AppContext} from "../../../Context/AppContext"; 
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {

    const appContext = useContext(AppContext);
    const navigate = useNavigate();

    const [blog,setBlog]= appContext.value1;

    const [featured,setFeatured] = useState([]);
    console.log(featured,'featured');

    useEffect(() => {
        setFeatured(data);
        AOS.init();
    },[])


    const getBlog =(blogitem)=>{
        console.log(blogitem);
        let filteredData = featured.filter((item) => item.id === blogitem.id);
        setBlog(filteredData);

        navigate(`/blogs/${blogitem.id}`);
    }

    return (
        <div className="featured-container container">
            <h1 className="section-heading"> Featured Blogs</h1>
            <div className="featured-blogs-wrapper">
                {featured.map((fblog)=>{
                    return(
                        <div className="featured-card flex" key={fblog.id} data-aos='fade-up ' data-aos-duration="1000">

                            <img src={fblog.cover} alt='fblog-cover' className="featured-image" />
                            <div className="featured-text">
                                <h4 className="blog-category-heading">{fblog.category}</h4>
                                <div className="flex align-items " > 
                                    <h5 className="author">{fblog.author}</h5>
                                    <span className="blogdate">{fblog.date}</span>
                                </div>
                                <h4>{fblog.text.substring(0,260 )}  . . .</h4>
                                <button className=" btn readmore pointer" onClick={()=>getBlog(fblog)}>Read more</button>
                            </div>

                        </div>
                    
                    )
                })}
            </div>
            
        </div>
    )
}

export default Blogs;
