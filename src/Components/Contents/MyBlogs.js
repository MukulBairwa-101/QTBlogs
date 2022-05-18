import React,{useContext,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {AppContext} from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmptyBlogs from "./EmptyContent/EmptyBlogs";

const MyBlogs = () => {

    
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    const [myblogs,setMyblogs]= appContext.value2;
    const [blog,setBlog]= appContext.value1;

    const getBlog =(blogitem)=>{
        let filteredData = myblogs.filter((item) => item.id === blogitem.id);
        setBlog(filteredData);

        navigate(`/myblogs/${blogitem.id}`);
    }

    useEffect(() => {
      AOS.init();
  },[])





  return (
    <div className="featured-container container swipper-container" data-aos='fade-up ' data-aos-duration="1000">
      <h1 className="section-heading"> My Blogs</h1>
      {
        myblogs.length !== 0 ?
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
            320: {
                width: 320,
                slidesPerView: 1,
              },

            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            
            1024: {
                width: 1024,
                slidesPerView: 3,
              },
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {
              myblogs.map((item)=>{
                  return(
                    <SwiperSlide className="swipper-slide">
                        <div className="slide myblog-card" key={item.id}>
                            <div className="myblog-image-div">
                                <img  src ="/images/sample.jpg" alt="sample" className="myblog-image" />

                            </div>
                            <div className="featured-text myblog-text">
                                <h4 className="blog-category-heading">{item.Category}</h4>
                                <div className="flex align-items myblogs-user-div " > 
                                    <h5 className="author">{item.Name}</h5>
                                    <span className="blogdate">{item.Time}</span>
                                </div>
                                <h4>{item.Description.substring(0,20 )}  . . .</h4>
                                <button className=" btn readmore pointer" onClick={()=>getBlog(item)} >Read more</button>
                            </div>

                        </div>
                    </SwiperSlide>
                  )
              })
          }
        
      </Swiper>
        :
      <EmptyBlogs />
      }
        </div>
  );
};

export default MyBlogs;
