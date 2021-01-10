import React, { useState, useEffect, setState } from "react";
import FormDataModel from "../data_model/form_data_model";
import ListOfForms from "../components/list_of_forms";
import Select from "react-select";
import { dbmethods } from "../firebase/dbmethods";
import firebase from "firebase";
import { saveAs } from "file-saver";
import "./home.css";
import HeaderDataModel from "../data_model/header_data_model";
import DescriptionDataModel from "../data_model/description_data_model";
import InputDataModel from "../data_model/input_data_model";
import SingleChoiceListDataModel from "../data_model/single_choice_list_data_model";
import MultipleChoiceListDataModel from "../data_model/multiple_choice_list_data_model";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { colors } from "@material-ui/core";
import { Document, Packer, Paragraph, TextRun } from "docx";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const [formToComplete, setFormToComplete] = useState(
    new FormDataModel("emptyForm", [])
  );
  const [forms, setForms] = useState([]);
  useEffect(() => {
    dbmethods.fetchItems(setForms);
  }, []);
  // const forms = [
  //   new FormDataModel("name1", [
  //     new HeaderDataModel("", "HeaderTitle"),
  //     new DescriptionDataModel("", "DescriptionTitle"),
  //     new InputDataModel("", "InputTitle", "InputDescription", "hint"),
  //     new SingleChoiceListDataModel(
  //       "",
  //       ["a", "b", "c"],
  //       "SingleChoiceListTitle",
  //       "SingleChoiceListDescription"
  //     ),
  //     new MultipleChoiceListDataModel(
  //       "",
  //       ["a", "b", "d"],
  //       "MultipleChoiceListTitle",
  //       "MultipleChoiceListDescription"
  //     ),
  //   ]),
  //   new FormDataModel("name2", []),
  //   new FormDataModel("name3", []),
  //   new FormDataModel("name4", []),
  //   new FormDataModel("name5", []),
  // ];

  const SelectStack = (props) => {
    const [select, setSelect] = useState([]);
    const options = [];
    props.list.forEach((arr) => {
      options.push({ value: arr, label: arr });
    });
    useEffect(() => {
      console.log(select);
    }, [select]);

    return props.isMulti ? (
      <div>
        <Select
          className="select"
          isMulti
          name="colors"
          options={options}
          value={select}
          onChange={(e) => {
            setSelect(e);
            formToComplete.elements[props.index].value = e;
          }}
        ></Select>
      </div>
    ) : (
      <div>
        <Select
          className="select"
          name="colors"
          options={options}
          value={select}
          onChange={(e) => {
            setSelect(e);
            formToComplete.elements[props.index].value = e;
          }}
        ></Select>
      </div>
    );
  };
  const HomeStack = () => {
    return (
      <div className="home">
        <h1 className="formsTitle">Formularze</h1>
        <ListOfForms
          list={forms}
          editState={setEdit}
          editForm={setFormToComplete}
        />{" "}
      </div>
    );
  };
  const EditStack = () => {
    return (
      <div className="editStack">
        <IconButton
          id="btn"
          style={{ color: colors.grey }}
          aria-label="Cofnij"
          onClick={(e) => {
            setEdit(false);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h1>{formToComplete.name}</h1>
        {formToComplete.elements.map((item, i) => {
          switch (item.type) {
            case "Header":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <input
                    placeholder={item.hint}
                    onChange={(e) => {
                      item.value = e.target.value;
                    }}
                  />
                  <div className="divider" />
                </div>
              );
              break;
            case "Description":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <input
                    placeholder={item.hint}
                    onChange={(e) => {
                      item.value = e.target.value;
                    }}
                  />
                  <div className="divider" />
                </div>
              );
              break;
            case "Input":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <h6>{item.desc}</h6>
                  <input
                    placeholder={item.hint}
                    onChange={(e) => {
                      item.value = e.target.value;
                    }}
                  />
                  <div className="divider" />
                </div>
              );
              break;
            case "SingleChoiceList":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <h6>{item.desc}</h6>
                  <SelectStack list={item.list} isMulti={false} index={i} />
                  <div className="divider" />
                </div>
              );
              break;
            case "MultipleChoiceList":
              return (
                <div className="elementStyle">
                  <h2>{item.name}</h2>
                  <h6>{item.desc}</h6>
                  <SelectStack list={item.list} isMulti={true} index={i} />
                  <div className="divider" />
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
        })}
        <button
          onClick={() => {
            const doc = new Document();
            doc.addSection({
              properties: {},
              children: [
                new Paragraph({
                  children: [
                    new TextRun("Hello World"),
                    new TextRun({
                      text: "Foo Bar",
                      bold: true,
                    }),
                    new TextRun({
                      text: "\tGithub is the best",
                      bold: true,
                    }),
                  ],
                }),
              ],
            });

            Packer.toBlob(doc).then((blob) => {
              console.log(blob);
              saveAs(blob, "example.docx");
              console.log("Document created successfully");
            });

            setEdit(false);
          }}
        >
          Pobierz plik DOCX
        </button>
      </div>
    );
  };
  return <>{edit ? <EditStack /> : <HomeStack />}</>;
};

export default Home;
