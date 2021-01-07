import React, { useState } from "react";
import { authMethods } from "../firebase/authmethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const initState = { name: "", password: "" };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.token === undefined ? null : window.localStorage.token
  );

  const handleSignin = () => {
    authMethods.signin(inputs.name, inputs.password, setErrors, setToken);
    setInputs(initState);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
