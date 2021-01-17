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
import { Document, Packer, Paragraph, ShadingType, HeadingLevel, TextRun, Table, TableRow, TableCell, WidthType, ITableCellMarginOptions } from "docx";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const [formToComplete, setFormToComplete] = useState(
    new FormDataModel("emptyForm", [])
  );
  const [forms, setForms] = useState([{
    business: "firma1",
    listForms: [
      new FormDataModel("form1", []),
      new FormDataModel("form2", []),
      new FormDataModel("form3", []),
    ]
  },{
    
    business: "firma2",
    listForms: [
      new FormDataModel("form1", []),
      new FormDataModel("form2", []),
      new FormDataModel("form3", []),
    ]
  }]);
  useEffect(() => {
    //TODO: zmodyfikować bazę 
    // dbmethods.fetchItems(setForms);
  }, []);

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
        <h3 className="formsTitle">Formularze</h3>
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
            let correct = true;
            formToComplete.elements.forEach((element) => {
              if (element.value.length === 0) {
                correct = false;
              }
            });
            if (correct) {
              const doc = new Document();
              const rows = [];
              formToComplete.elements.forEach((element) => {
                switch (element.type) {
                  case "Header":
                    rows.push(
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.value,
                                    size: 36,
                                    bold: true,
                                  })
                                ],
                              })],
                            shading: {
                                fill: "ebebeb",
                                val: ShadingType.PERCENT_15,
                                color: "auto",
                            },
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                        ],
                      })
                    );
                    break;
                  case "Description":
                    rows.push(
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.value,
                                    size: 18,
                                  })
                                ],
                              })
                            ],
                            shading: {
                                fill: "ebebeb",
                                val: ShadingType.PERCENT_5,
                                color: "auto",
                            },
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                        ],
                      })
                    );
                    break;
                  case "Input":
                    rows.push(
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.name,
                                    size: 18,
                                    bold: true
                                  })
                                ],
                                })],
                              shading: {
                                  fill: "ebebeb",
                                  val: ShadingType.PERCENT_5,
                                  color: "auto",
                              },
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.value,
                                    size: 18,
                                  })
                                ],
                                })],
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                        ],
                      })
                    );
                    break;
                  case "SingleChoiceList":
                    rows.push(
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.name,
                                    size: 18,
                                    bold: true
                                  })
                                ],
                                })],
                              shading: {
                                  fill: "ebebeb",
                                  val: ShadingType.PERCENT_5,
                                  color: "auto",
                              },
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.value.value,
                                    size: 18,
                                  })
                                ],
                                })],
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                        ],
                      })
                    );
                    break;
                  case "MultipleChoiceList":
                    let value = "";
                    element.value.forEach((item) => {
                      value += `${item.value}, `
                    });
                    rows.push(
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: element.name,
                                    size: 18,
                                    bold: true
                                  })
                                ],
                                })],
                              shading: {
                                  fill: "ebebeb",
                                  val: ShadingType.PERCENT_5,
                                  color: "auto",
                              },
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: value,
                                    size: 18,
                                  })
                                ],
                                })],
                            width: {
                              size: 100,
                              type: WidthType.PCT,
                            },
                            margins: {
                              top: 100,
                              bottom: 100,
                              left: 100,
                              right: 100,
                            },
                          }),
                        ],
                      })
                    );
                    break;
                  default:
                    break;
                }
              });

              if (rows.length !== 0) {
                const table = new Table({
                  rows: rows,
                  width: {
                    size: 9000,
                    type: WidthType.DXA,
                  },
                });
                doc.addSection({
                  properties: {},
                  children: [table],
                });
                Packer.toBlob(doc).then((blob) => {
                  saveAs(blob, formToComplete.name + ".docx");
                });
              } else {
                alert("błąd długości formularza");
              }
              setEdit(false);
            } else {
              alert("Pola formularza nie moga być puste.");
            }
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
