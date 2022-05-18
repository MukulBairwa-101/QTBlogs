import React from 'react'
import { useNavigate } from "react-router-dom";
const EmptyBlogs = () => {
    const navigate = useNavigate();
    return (
        <div className="empty-wrapper flex align-items flex-column">
            <h2>You Didn't Write  Any Blog Yet ?</h2>
            <button className="btn pointer create-btn" onClick={()=>navigate('/create')}>Create</button>
        </div>
    )
}

export default EmptyBlogs;
