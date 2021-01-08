import React, { useState, useEffect } from "react";
import FormDataModel from "../data_model/form_data_model";
import ListOfForms from "../components/list_of_forms";
import Select from "react-select";
import { dbmethods } from "../firebase/dbmethods";
import "./home.css";
import HeaderDataModel from "../data_model/header_data_model";
import DescriptionDataModel from "../data_model/description_data_model";
import InputDataModel from "../data_model/input_data_model";
import SingleChoiceListDataModel from "../data_model/single_choice_list_data_model";
import MultipleChoiceListDataModel from "../data_model/multiple_choice_list_data_model";

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
  const [formToComplete, setFormToComplete] = useState(new FormDataModel("emptyForm", []),);
  const forms = [
    new FormDataModel("name1", [
      new HeaderDataModel("", "HeaderTitle"),
      new DescriptionDataModel("", "DescriptionTitle"),
      new InputDataModel("", "InputTitle", "InputDescription", "hint"),
      new SingleChoiceListDataModel("", [], "SingleChoiceListTitle", "SingleChoiceListDescription"),
      new MultipleChoiceListDataModel("", [], "MultipleChoiceListTitle", "MultipleChoiceListDescription"),
    ]),
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
        <button onClick={dbmethods.pushItem(forms)}> Dodaj folder </button>
        <ListOfForms list={forms} editState={setEdit} editForm={setFormToComplete} />{" "}
      </div>
    );
  };
  const EditStack = () => {
    return (
      <div className="editStack">
        <h1>{formToComplete.name}</h1>
        {formToComplete.elements.map((item, i) => {
          switch (item.type) {
            case "Header":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <input
                    placeholder={item.hint}
                  />
                </div>
              );
              break;
            case "Description":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <input
                    placeholder={item.hint}
                  />
                </div>
              );
              break;
            case "Input":
              return (
                <div className="elementStyle">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <input
                  placeholder={item.hint}
                />
                </div>
              );
              break;
            case "SingleChoiceList":
              return (
                <div className="elementStyle">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                </div>
              );
              break;
            case "MultipleChoiceList":
              return (
                <div className="elementStyle">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                </div>
              );
              break;
            default:
              return (
                <div>
                  <p>Nieznanny element</p>
                </div>
              );
              break;
          }
          return (
            <div>
              <p>{item.name}</p>
            </div>
          );
        })}
        <button onClick={() => setEdit(false)}></button>
      </div>
    );
  };
  return <>{edit ? <EditStack /> : <HomeStack />}</>;
};

export default Home;
