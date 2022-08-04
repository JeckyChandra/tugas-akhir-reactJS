import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Styles.css";
//Firebase
import {storage} from '../Google/Firebase';
import {ref, uploadBytes, getDownloadURL, uploadBytesResumable} from 'firebase/storage';

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");


  const uploadFile = (e) =>{
    let file = e.target.files[0];

    let fileRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes) *100;
      console.log('Upload is' + progress + '% done')
      getDownloadURL(fileRef).then((url)=>{
        setLink(url);
      })
    });
  }

  useEffect(() => {
    setUsername(localStorage.getItem("Username"));
    setEmail(localStorage.getItem("Email"));
  }, [username, email]);

  const navigate = useNavigate();

  const d = new Date();
  let date = d.toLocaleDateString();

  const data = {
    title: title,
    description: description,
    username: username,
    email: email,
    date: date,
    image: link,
  };

  function Submit(e) {
    e.preventDefault();
    axios.post("http://localhost:3003/data", data).then(navigate("/"));
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "bisque",
          display: "flex",
          paddingLeft: "20px",
        }}
      >
        <h5>Welcome, {username}</h5>
      </div>
      <div className="container">
        <form>
          <h1>Add To Do</h1>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            placeholder="Enter Description"
            cols="30"
            rows="10"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <input type="file" onChange={uploadFile}/>
          <button className="ButtonClass" onClick={Submit}>
            Add To Do
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
