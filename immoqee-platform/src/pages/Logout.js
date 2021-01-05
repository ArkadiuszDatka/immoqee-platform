import React, { useContext, useEffect } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

const Logout = () => {
  const { handleSignout } = useContext(firebaseAuth);
  useEffect(() => {
    handleSignout();
  });
  return (
    <div className="logout">
      <h1>Trwa wylogowywanie się z platformy</h1>
    </div>
  );
};

export default Logout;
