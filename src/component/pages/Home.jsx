import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    axios.get("http://localhost:3003/data").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    loadData()
  }, []);

  function Delete(id) {
    axios.delete(`http://localhost:3003/data/${id}`).then(
      loadData()
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((db, index) => (
            <tr key={index}>
              <td>{db.id}</td>
              <td>{db.title}</td>
              <td>{db.description}</td>
              <td>
                <Link to={`/view/${db.id}`}>View</Link>
                <Link to={`/edit/${db.id}`}>Edit</Link>
                <button onClick={()=>Delete(db.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
