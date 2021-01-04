import React, { useState, useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

const Home = () => {
  const { handleSignout } = useContext(firebaseAuth);
  return (
    <div className="home">
      <h1>Wszystkie formularze</h1>
      <button onClick={handleSignout}>Wyloguj się</button>
    </div>
  );
};

export default Home;
