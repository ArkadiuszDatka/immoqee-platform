import React, { useContext } from "react";
import "./Signin.css";
import { firebaseAuth } from "../provider/AuthProvider";

const Signin = () => {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="signinForm">
      Zaloguj się
      <input
        onChange={handleChange}
        name="name"
        placeholder="nazwa"
        value={inputs.email}
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="hasło"
        value={inputs.password}
      />
      <button>Potwierdź</button>
      {errors.length > 0
        ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
        : null}
    </form>
  );
};

export default Signin;
