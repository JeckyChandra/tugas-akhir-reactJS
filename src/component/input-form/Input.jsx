import React, { useEffect, useState } from "react";

const Input = () => {
  // const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // const accessToken = localStorage.getItem("access_token");
    // if (accessToken) {
    //   navigate("/home");
    // }
  }, []);

  const onSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);

    // try {
    //   const sendData = await instances.post("user/login", form);

    //   console.log(sendData, "<<< resp");

    //   if (sendData.data.message == "success") {
    //     localStorage.setItem("access_token", sendData.data.token);
    //     navigate("/");
    //   }
    // } catch (error) {
    //   setErrorMessage(error.message);
    // }

    // setLoading(false);
  };

  const onChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    console.log(value);

    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container">
      <div className="card">
	  <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={onChange}
        />
        <br />
        <br />

        {/* {loading ? (
          <div>Loading...</div>
        ) : (
          <input type="submit" value="Login" />
        )} */}
      </form>
	  </div>
    </div>
  );
};

export default Input;
