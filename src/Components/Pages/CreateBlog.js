import React ,{useState ,useContext} from "react";
import {AppContext} from "../../Context/AppContext";

const CreateBlog = () => {

    const appContext = useContext(AppContext);
    
    const [myblogs,setMyblogs]= appContext.value2;

    const [customBlog,setCustomBlog] =useState({
        Title:'',
        Description:'',
        Name:'',
        Category:'',
        Time:'',
        id:0


    })
    const handleChange =(e) =>{
        let {name, value} = e.target;
       setCustomBlog({
           ...customBlog,
           [name]:value
       })
    }

    const addBlog =() =>{

        const d = new Date();
        let createdAt = d.toLocaleString();
      
        customBlog.Time = createdAt;
        customBlog.id = myblogs.length + 1;
        setMyblogs([...myblogs,customBlog]);
        setCustomBlog({
          Title:'',
          Description:'',
          Name:'',
          Category:'',
          Time:'',
  
        })

    }



  return (
    <div className="create-container container ">
      <h1>Write your thoughts . . . .</h1>
      <div className="divider"></div>
      <div className="input-wrapper ">
          <form>
          <div className="flex flex-column mt-20 ">
          <label>Blog Title</label>
          <input
            type="text"
            placeholder="Blog title"
            name="Title"
            className="mt-20 input"
            value={customBlog.Title}
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="flex flex-column mt-20">
          <label>Blog Description</label>
          <textarea
            type="text"
            placeholder="Blog Description"
            name="Description"
            className="mt-20 input"
            value={customBlog.Description}
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="flex flex-column mt-20">
          <label>Author Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="Name"
            className="mt-20 input"
            value={customBlog.Name}
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="flex flex-column mt-30">
          <label>Category</label>
          <input
            type="text"
            placeholder="Science , Health , Sports ..."
            name="Category"
            className="mt-20 input"
            value={customBlog.Category}
            onChange={(e)=>handleChange(e)}
          />
        </div>
    </form>

      <div className="create-btn-div" >
        <button className="btn pointer create-btn" onClick={addBlog}>Create</button>
      </div>
      </div>
    </div>
  );
};

export default CreateBlog;
