import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Styles.css";

function Home() {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [search, setSearchKey] = useState("");
  // const navigate = useNavigate();

  const loadData = () => {
    axios.get("http://localhost:3003/data").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, [data]);

  function Delete(id) {
    axios.delete(`http://localhost:3003/data/${id}`).then(loadData());
  }

  return (
    <div>
      <br/>
      <div style={{ width: "350px", display: "flex", paddingLeft: "20px" }}>
        <input
          type="text"
          className="txtSearch"
          value={search}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          className="btnSearch"
          onClick={() => {
            axios.get(`http://localhost:3003/data/${search}`).then((res) => {
              setDatas(res.data);
            });
          }}
        >
          Search
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            textAlign: "center",
            width: "96%",
            borderRadius: "25px 25px",
            boxShadow:"1px 1px 3px grey",
          }}
        >
          <h2>{datas.title}</h2>
          <p>{datas.description}</p>
        </div>
      </div>
      <table>
        <thead className="container-head">
          <tr>
            <th className="th-1">No</th>
            <th className="th-2">Judul</th>
            <th className="th-3">Deskripsi</th>
            <th className="th-4">Handle</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((db, index) => (
            <tr key={index}>
              <td className="td-1">{db.id}</td>
              <td className="td-2">{db.title}</td>
              <td className="td-3">{db.description}</td>
              <td className="td-4">
                <button className="view">
                  <Link className="Link" to={`/view/${db.id}`}>
                    View
                  </Link>
                </button>
                <button className="edit">
                  <Link className="Link" to={`/edit/${db.id}`}>
                    Edit
                  </Link>
                </button>
                <button className="delete" onClick={() => Delete(db.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
