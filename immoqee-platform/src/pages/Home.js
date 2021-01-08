import React, { useState, useEffect } from "react";
import FormDataModel from "../data_model/form_data_model";
import ListOfForms from "../components/list_of_forms";
import Select from "react-select";
import { dbmethods } from "../firebase/dbmethods";
import "./home.css";

const Home = () => {
  const [select, setSelect] = useState([]);
  useEffect(() => {
    console.log(select);
  }, [select]);
  const options = [
    { value: "Język Angielski", label: "Język Angielski" },
    { value: "Język Niemiecki", label: "Język Niemiecki" },
    { value: "Język Polski", label: "Język Polski" },
  ];
  const [edit, setEdit] = useState(false);
  const forms = [
    new FormDataModel("name1", []),
    new FormDataModel("name2", []),
    new FormDataModel("name3", []),
    new FormDataModel("name4", []),
    new FormDataModel("name5", []),
  ];
  const HomeStack = () => {
    return (
      <div className="home">
        <h1 className="formsTitle">Formularze</h1>
        <Select
          className="select"
          isMulti
          name="colors"
          options={options}
          value={select}
          onChange={(e) => {
            setSelect(e);
          }}
        ></Select>
        <ListOfForms list={forms} editState={setEdit} />{" "}
      </div>
    );
  };
  const EditStack = () => {
    /* Tutaj będzie komponent do edytowania z propsem do przesłania (ten obiekt co chcemy edytować) */
    return (
      <div>
        <h1>Komponent do edytowania</h1>
        <button onClick={() => setEdit(false)}></button>
      </div>
    );
  };
  return <>{edit ? <EditStack /> : <HomeStack />}</>;
};

export default Home;
