import React, { useContext, useEffect } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { handleSignout } = useContext(firebaseAuth);
  const history = useHistory();
  useEffect(() => {
    handleSignout();
    history.push("/");
  });
  return (
    <div className="logout">
      <h1>Trwa wylogowywanie się z platformy</h1>
    </div>
  );
};

export default Logout;
