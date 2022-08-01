import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/data").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
