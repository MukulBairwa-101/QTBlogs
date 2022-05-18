import React,{useContext} from 'react'
import {AppContext} from "../../Context/AppContext"; 
const Blog = () => {

    const appContext = useContext(AppContext);
    const [blog,setBlog]= appContext.value1;
    return (
        <div className="blog-container container"> 
            {
                blog.map((blogitem)=>{
                    return(
                        <div className="blog-wrapper" key={blogitem.id}>
                            <h2>{blogitem.title}</h2>
                            <div>
                                <h4 className="blog-category-heading">{blogitem.category}</h4>
                                <div className="flex align-items " > 
                                    <h5 className="author">{blogitem.author}</h5>
                                    <span className="blogdate">{blogitem.date}</span>
                                </div>
                            </div>
                            <div className="page-cover-div"> 

                            <img src={blogitem.cover} alt="cover" className="blogpage-Cover" />
                            </div>
                            <p className="blog-description blog-desc-m">
                                {blogitem.text}
                            </p>

                            

                            {
                                blogitem.subTexts.map((sub)=>{
                                    return(
                                        <>
                                        <div className="flex  justify-content-btw subimages">
                                            {
                                                sub.subImage1 ?  <img src={sub.subImage1} alt="cover" className="subImage" />:''
                                            }
                                            {
                                                sub.subImage2 ?<img src={sub.subImage2} alt="cover" className="subImage" />:''
                                            }
                               
                                
                            </div>
                                        <h3>{sub.subTitle}</h3>
                                        <p className="blog-description" >{sub.subtext}</p>


                                        {sub.subItems ? sub.subItems.map((el,idx)=>{
                                            return(
                                                <p key={idx} className="blog-description">{el}</p>
                                            )
                                        }):''}
                                        </>
                                        
                                       
                                    )
                                })
                            }

                            
                            


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog;
