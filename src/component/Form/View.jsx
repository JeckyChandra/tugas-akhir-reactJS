import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Styles/Styles.css";

function View() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:3003/data/${id}`).then((res) => {
      setData(res.data);
    });
    setUsername(localStorage.getItem("Username"));
  }, [username]);

  const { id } = useParams();

  return (
    <div className="container">
      <div className="viewContainer">
        {data && (
          <div>
            <div className="theTopWords">Hallo, {username} </div>
            <p> date : {data.date}</p>
            <h2>{data.title} </h2>
            <p>{data.description}</p>
            {data.image ? <img src={data.image} alt="" srcset="" width={200} height={200} style={{objectFit:"contain",}}/> : ""}
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
