import React, { useState } from "react";
import Select from "react-select";
import "./new_form_page.css";
import ListOfFormElements from "../components/list_of_form_elements";
import InputFormDataModel from "../../../core/data_model/input_form_data_model";

const NewFormPage = () => {
  const options = [
    { value: "Język Angielski", label: "Język Angielsk" },
    { value: "Język Niemiecki", label: "Język Niemiecki" },
    { value: "Język Rosyjski", label: "Język Rosyjski" },
  ];

  const [formData, setFormData] = useState([
    new InputFormDataModel("name", "desc", "hint"),
    new InputFormDataModel("name", "desc", "hint", "Select"),
  ]);
  const [selectItems, setSelectItems] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <p>Proszę wpisać nazwę formularza</p>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <Select
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
      <p>{selectItems}</p>
      <p>Elementy formularza</p>
      <ListOfFormElements list={formData} />{" "}
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

export default NewFormPage;
