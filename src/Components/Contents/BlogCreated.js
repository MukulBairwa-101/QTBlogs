import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const BlogCreated = () => {

  
    useEffect(() => {
        AOS.init();
    },[])


    

    return (
        <div className="blog-created " data-aos='fade-left '>
            <span>Blog Created </span>            
        </div>
    )
}

export default BlogCreated;
