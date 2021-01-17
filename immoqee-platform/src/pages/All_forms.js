import React, { useState } from "react";
import { dbmethods } from "../firebase/dbmethods";
import "./All_forms.css";

const All_forms = () => {
  const [company, setCompany] = useState("");
  const handleChange = (e) => {
    setCompany(e.target.value);
    console.log(e.target.value);
  };
  const submitChange = () => {
    if(company.length !==0){
      dbmethods.pushCompany(company);
      alert("Dodano");
    } else {
      alert("Nazwa nie może być pusta");
    }
  };
  return (
    <div className="all_forms">
      <input className="allFormsInput" placeholder="Podaj nazwę klienta" onChange={handleChange}></input>
      <button className="allFormsAddButton" onClick={submitChange} style={{ width: 100 }}>
        Dodaj
      </button>
    </div>
  );
};

export default All_forms;
