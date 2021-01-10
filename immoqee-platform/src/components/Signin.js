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
    <div>
      <section className="login">
        <div className="loginContainer">
          <label>Nazwa użytkownika</label>
          <input
            onChange={handleChange}
            name="name"
            placeholder="Nazwa"
            value={inputs.email}
          />
          <label>Hasło</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Hasło"
            value={inputs.password}
          />
          <div className="btnContainer">
            <button onClick={handleSubmit}>Potwierdź</button>
          </div>
          {errors.length > 0 ? (
            <p style={{ color: "red" }}>{errors[errors.length - 1]}</p>
          ) : null}
        </div>
      </section>
    </div>
    // <form onSubmit={handleSubmit} className="signinForm">
    //   Zaloguj się
    //   <input
    //     onChange={handleChange}
    //     name="name"
    //     placeholder="nazwa"
    //     value={inputs.email}
    //   />
    //   <input
    //     onChange={handleChange}
    //     type="password"
    //     name="password"
    //     placeholder="hasło"
    //     value={inputs.password}
    //   />
    //   <button>Potwierdź</button>
    //   {errors.length > 0
    //     ? errors.map((error,key) => <p style={{ color: "red" }}>{error}</p>)
    //     : null}
    // </form>
  );
};

export default Signin;
