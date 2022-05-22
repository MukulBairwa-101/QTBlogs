import React,{useContext} from 'react'
import {AppContext} from "../../Context/AppContext"; 
const MyBlog = () => {

    const appContext = useContext(AppContext);
    const [blog,setBlog]= appContext.value1;
    return (
        <>
              <div className="blog-container container"> 
            {
                blog.map((blogitem)=>{
                    return(
                        <div className="blog-wrapper" key={blogitem.id}>
                            <h2>{blogitem.Title}</h2>
                            <div>
                                <h4 className="blog-category-heading">{blogitem.Category}</h4>
                                <div className="flex align-items " > 
                                    <h5 className="author">{blogitem.Name}</h5>
                                    <span className="blogdate">{blogitem.Time}</span>
                                </div>
                            </div>
                            <div className="page-cover-div"> 
                            {
                                blogitem.image ?
                                <img src={blogitem.image} alt="cover" className="myblogpage-Cover" />
                                :''
                            }
                            </div>
                            <p className="blog-description blog-desc-m">
                                {blogitem.Description}
                            </p> 
                        </div>
                    )
                })
            }
        </div>

        </>
    )

}

export default MyBlog;
