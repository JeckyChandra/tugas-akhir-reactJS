import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3003/data/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const { id } = useParams();

  return <div>Hello
    {data && (<h1>{data.title}</h1>)}
  </div>;
}

export default View;
