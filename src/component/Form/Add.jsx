import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddTodo() {

    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const navigate = useNavigate();

    const data = {
        title: title,
        description: description
    }

    function Submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3003/data",data)
        .then(
            navigate('/')
        )
    }

  return (
    <div>
      <h1>Add To Do</h1>
      <form>
        <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="To do" value={description} onChange={(e)=>setDesc(e.target.value)}/>
        <button onClick={Submit}>Add To Do</button>
      </form>
    </div>
  );
}

export default AddTodo;
