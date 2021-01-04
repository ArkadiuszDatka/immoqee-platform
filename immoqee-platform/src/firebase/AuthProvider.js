import React from "react";
import { authMethods } from "../firebase/authmethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const handleSignup = () => {
    // middle man between firebase and signup
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
