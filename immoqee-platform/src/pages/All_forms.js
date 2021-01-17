import React, { useState } from "react";
import { dbmethods } from "../firebase/dbmethods";

const All_forms = () => {
  const [company, setCompany] = useState("");
  const handleChange = (e) => {
    setCompany(e.target.value);
    console.log(e.target.value);
  };
  const submitChange = () => {
    dbmethods.pushCompany(company);
  };
  return (
    <div className="all_forms">
      <input placeholder="Podaj nazwę klienta" onChange={handleChange}></input>
      <button onClick={submitChange} style={{ width: 100 }}>
        Dodaj
      </button>
    </div>
  );
};

export default All_forms;
