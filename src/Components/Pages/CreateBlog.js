import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

const CreateBlog = () => {
  const appContext = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);
  const [myblogs, setMyblogs] = appContext.value2;
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState("/images/image-icon2.jpg");
  const [isCreated,setIsCreated] = appContext.value3;

  const [customBlog, setCustomBlog] = useState({
    Title: "",
    Description: "",
    Name: "",
    Category: "",
    Time: "",
    id: 0,
    image:''
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setCustomBlog({
      ...customBlog,
      [name]: value,
    });
  };

  const addBlog = () => {
    const d = new Date();
    let createdAt = d.toLocaleString();

    customBlog.Time = createdAt;
    customBlog.id = myblogs.length + 1;
    customBlog.image = imageUpload;
    setMyblogs([...myblogs, customBlog]);
    setIsClicked(true);
    setCustomBlog({
      Title: "",
      Description: "",
      Name: "",
      Category: "",
      Time: "",
      image:''
    });
    setIsCreated(true);
    setTimeout(() => {
      setIsCreated(false);
    }, 5000);
    navigate("/#myblogsSection");

  };

  const handleImage = (e) => {
    const fileRead = new FileReader();
    fileRead.onload = () => {
      if (fileRead.readyState === 2) setImageUpload(fileRead.result);
    };
    fileRead.readAsDataURL(e.target.files[0]);
  };


  return (
    <div className="create-container container ">

      <h1>Write your thoughts . . . .</h1>
      <div className="divider"></div>
      <div className="input-wrapper ">
        <form onSubmit={addBlog}>
          <div className="flex flex-column mt-20 ">
            <label>Add Your Image</label>
            <div className="image-holder">
              <img src={imageUpload} alt="img" className="uploadimage" />
            </div>

            <input
              type="file"
              name="image-upload"
              id="input-image"
              accept="image/*"
              onChange={handleImage}
              required="true"
            />
          </div>
          <div className="flex flex-column mt-20 ">
            <label>Blog Title</label>
            <input
              type="text"
              placeholder="Blog title"
              name="Title"
              className="mt-20 input"
              value={customBlog.Title}
              onChange={(e) => handleChange(e)}
              required="true"
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
              onChange={(e) => handleChange(e)}
              required="true"
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
              onChange={(e) => handleChange(e)}
              required="true"
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
              onChange={(e) => handleChange(e)}
              required="true"
            />
          </div>
          <div className="create-btn-div">
            <button type="submmit" className="btn pointer create-btn">
              Create
            </button>
          </div>
        </form>

        {/* {isClicked ?<h4>Blog is added Successfully</h4>:'' } */}
      </div>
    </div>
  );
};

export default CreateBlog;
