import React from 'react'
import {useNavigate} from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate();

    const footerRoute =(path)=>{
        navigate(`/#${path}`);
    }
    return (
        <div className="footer-container container flex">
        <div className="logo-div pointer footer-logo-div">
        <img src="/images/logo.png" className="logo-image footer-logo-image " alt="logo-img" />
        <h2 className="logo-text footer-logo-text">QTBLOGS</h2>
      </div>
      <div className="footer-nav flex ">
            
            <div className="flex flex-column footer-item-div">
                <h4 className="footer-link">Blogs</h4>
                <ul>
                    <li onClick={()=>footerRoute('featuredblogsSection')}>
                        Featured Blogs
                    </li>
                    <li onClick={()=>footerRoute('myblogsSection')}>
                        My Blogs
                    </li>
                </ul>

            </div>
            <div className="flex flex-column footer-item-div">
                <h4 className="footer-link">About Us</h4>
                <p className="footer-p">QTBlogs is a Blog platform for  writing and sharing your thoughts with the everyone out there .
                    In QTBlogs you can create your blogs , look at your blogs , update your blog items , and can remove your blog post.
                    Also read the articles of the peoples like you who belives to share thier thoughts .
                </p>

            </div>
            
      </div>
        </div>
    )
}

export default Footer;
