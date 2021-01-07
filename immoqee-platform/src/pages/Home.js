import React from "react";
import FormDataModel from "../data_model/form_data_model";
import ListOfForms from "../components/list_of_forms";
import "./home.css";

const Home = () => {
  const forms = [
    new FormDataModel("name1", []),
    new FormDataModel("name2", []),
    new FormDataModel("name3", []),
    new FormDataModel("name4", []),
    new FormDataModel("name5", []),
  ];
  return (
    <div className="home">
      <h1 className="formsTitle">Formularze</h1>
      <ListOfForms list={forms} />{" "}
    </div>
  );
};

export default Home;
