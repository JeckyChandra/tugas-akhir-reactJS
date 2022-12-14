import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Styles.css";
import axios from "axios";

function EditTodo() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3003/data/${id}`).then((res) => {
      setTitle(res.data.title);
      setDesc(res.data.description);
    });
  }, []);

  const data = {
    title: title,
    description: description,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3003/data/${id}`, data).then(navigate("/"));
  }

  return (
    <div
      className="container"
    >
      <form>
      <h1>Edit To Do</h1>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={description} name="" id="" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)}></textarea>
        <button className="ButtonClass" onClick={Update}>Edit To Do</button>
      </form>
    </div>
  );
}

export default EditTodo;
