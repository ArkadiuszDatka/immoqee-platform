import React, { useState } from "react";
import Select from "react-select";
import "./new_form_page.css";
import ListOfFormElements from "../components/list_of_form_elements";
import HeaderDataModel from "../../../core/data_model/header_data_model";
import DescriptionDataModel from "../../../core/data_model/description_data_model";
import InputDataModel from "../../../core/data_model/input_data_model";
import SingleChoiceListDataModel from "../../../core/data_model/single_choice_list_data_model";
import MultipleChoiceListDataModel from "../../../core/data_model/multiple_choice_list_data_model";

const NewFormPage = () => {
  const options = [
    { value: "Język Angielski", label: "Język Angielsk" },
    { value: "Język Niemiecki", label: "Język Niemiecki" },
    { value: "Język Rosyjski", label: "Język Rosyjski" },
  ];

  const [formData, setFormData] = useState([
    new HeaderDataModel("val", "header"),
    new DescriptionDataModel("val", "description"),
    new InputDataModel("val", "input", "desc", "hint"),
    new SingleChoiceListDataModel("val", [], "single", "desc"),
    new MultipleChoiceListDataModel("val", [], "multi", "desc"),
  ]);
  const [selectItems, setSelectItems] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="newFormMainPage">
      <h1 className="newFormMainPageH1">Podaj nazwę formularza</h1>
      <input
        className="newFormMainPageInput"
        placeholder="Nazwa"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <h1 className="newFormMainPageH1">Elementy formularza</h1>
      <ListOfFormElements list={formData} />{" "}
      <div className="newFormMainPageButtonBar">
        <button className="newFormMainPageAddButton" onClick={() => {}}>
          Dodaj nagłówek
        </button>
        <button className="newFormMainPageAddButton" onClick={() => {}}>
          Dodaj opis
        </button>
        <button
          className="newFormMainPageAddButton"
          onClick={() => {
            // setFormData([
            //   ...formData,
            //   new InputFormDataModel("name", inputText, "hint", "Select"),
            // ]);
          }}
        >
          Dodaj pole tekstowe
        </button>
        <button className="newFormMainPageAddButton" onClick={() => {}}>
          Dodaj listę jednokrotnego wyboru
        </button>
        <button className="newFormMainPageAddButton" onClick={() => {}}>
          Dodaj listę wielokrotnego wyboru
        </button>
        <button className="newFormMainPageSaveButton" onClick={() => {}}>
          Zapisz
        </button>
      </div>
    </div>
  );
};

// class NewFormPage extends React.Component {
//   /* interface InputFormDataModel{
//         "name": string,
//         "desc": string,
//         "hint": string,
//     }

//     const object1 = {};
//     if(object1)
//     */

//   state = {
//     elements: [
//       new InputFormDataModel("name", "desc", "hint"),
//       new InputFormDataModel("name2", "desc", "hint"),
//     ],
//   };
//   render() {
//     return (
//       <div>
//         <p>Proszę wpisać nazwę formularza</p>
//         <input onChange={this.setState()}></input>
//         <p>Elementy formularza</p>
//         <p>{this.state.elements[0].name}</p>
//         <ListOfFormElements list={this.state.elements} />
//       </div>
//     );
//   }
// }

/* <Select
        isMulti
        className={"Select"}
        options={options}
        onInputChange={(data) => setSelectItems(data)}
      />
      <button
        onClick={() => {
          setFormData([
            ...formData,
            new InputFormDataModel("name", inputText, "hint", "Select"),
          ]);
        }}
      >
        X D
      </button>
      <p>{selectItems}</p> */

export default NewFormPage;
