import React, { useState, Component } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "react-select";
import { dbmethods } from "../firebase/dbmethods";
import "./new_form_page.css";
import ListOfFormElements from "../components/list_of_form_elements";
import HeaderDataModel from "../data_model/header_data_model";
import DescriptionDataModel from "../data_model/description_data_model";
import InputDataModel from "../data_model/input_data_model";
import SingleChoiceListDataModel from "../data_model/single_choice_list_data_model";
import MultipleChoiceListDataModel from "../data_model/multiple_choice_list_data_model";
import ListOfItems from "../components/list_of_items";
import AddIcon from "@material-ui/icons/Add";
import FormDataModel from "../data_model/form_data_model";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const NewFormPage = () => {
  const [formData, setFormData] = useState([]);
  const [listItemsData, setListItemsData] = useState([]);
  const [selectItems, setSelectItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const history = useHistory();

  const [headerInputText, headerSetInputText] = useState("");
  const [descriptionInputText, descriptionSetInputText] = useState("");
  const [inputNameInputText, inputNameSetInputText] = useState("");
  const [inputDescInputText, inputDescSetInputText] = useState("");
  const [inputHintInputText, inputHintSetInputText] = useState("");
  const [
    singleChoiceListNameInputText,
    singleChoiceListNameSetInputText,
  ] = useState("");
  const [
    singleChoiceListDescInputText,
    singleChoiceListDescSetInputText,
  ] = useState("");
  const [
    singleChoiceListNewItemInputText,
    singleChoiceListNewItemSetInputText,
  ] = useState("");
  const [
    multipleChoiceListNameInputText,
    multipleChoiceListNameSetInputText,
  ] = useState("");
  const [
    multipleChoiceListDescInputText,
    multipleChoiceListDescSetInputText,
  ] = useState("");
  const [
    multipleChoiceListNewItemInputText,
    multipleChoiceListNewItemSetInputText,
  ] = useState("");

  const [openHeaderDialog, setOpenHeaderDialog] = React.useState(false);
  const [openDescriptionDialog, setOpenDescriptionDialog] = React.useState(
    false
  );
  const [openInputDialog, setOpenInputDialog] = React.useState(false);
  const [
    openSingleChoiceListDialog,
    setOpenSingleChoiceListDialog,
  ] = React.useState(false);
  const [
    openMultipleChoiceListDialog,
    setOpenMultipleChoiceListDialog,
  ] = React.useState(false);

  const handleClickOpenHeaderDialog = () => {
    setOpenHeaderDialog(true);
  };
  const handleCloseHeaderDialog = (name, save) => {
    if (save === "true") {
      setFormData([...formData, new HeaderDataModel("", name)]);
    }
    setOpenHeaderDialog(false);
  };

  const handleClickOpenDescriptionDialog = () => {
    setOpenDescriptionDialog(true);
  };
  const handleCloseDescriptionDialog = (name, save) => {
    if (save === "true") {
      setFormData([...formData, new DescriptionDataModel("", name)]);
    }
    setOpenDescriptionDialog(false);
  };

  const handleClickOpenInputDialog = () => {
    setOpenInputDialog(true);
  };
  const handleCloseInputDialog = (name, desc, hint, save) => {
    if (save === "true") {
      setFormData([...formData, new InputDataModel("", name, desc, hint)]);
    }
    setOpenInputDialog(false);
  };

  const handleClickOpenSingleChoiceListDialog = () => {
    setOpenSingleChoiceListDialog(true);
  };
  const handleCloseSingleChoiceListDialog = (list, name, desc, save) => {
    if (save === "true") {
      setFormData([
        ...formData,
        new SingleChoiceListDataModel("", list, name, desc),
      ]);
      setListItemsData([]);
    }
    setOpenSingleChoiceListDialog(false);
  };

  const handleClickOpenMultipleChoiceListDialog = () => {
    setOpenMultipleChoiceListDialog(true);
  };
  const handleCloseMultipleChoiceListDialog = (list, name, desc, save) => {
    if (save === "true") {
      setFormData([
        ...formData,
        new MultipleChoiceListDataModel("", list, name, desc),
      ]);
      setListItemsData([]);
    }
    setOpenMultipleChoiceListDialog(false);
  };

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
        <button
          className="newFormMainPageAddButton"
          onClick={handleClickOpenHeaderDialog}
        >
          Dodaj nagłówek
        </button>
        <button
          className="newFormMainPageAddButton"
          onClick={handleClickOpenDescriptionDialog}
        >
          Dodaj opis
        </button>
        <button
          className="newFormMainPageAddButton"
          onClick={handleClickOpenInputDialog}
        >
          Dodaj pole tekstowe
        </button>
        <button
          className="newFormMainPageAddButton"
          onClick={handleClickOpenSingleChoiceListDialog}
        >
          Dodaj listę jednokrotnego wyboru
        </button>
        <button
          className="newFormMainPageAddButton"
          onClick={handleClickOpenMultipleChoiceListDialog}
        >
          Dodaj listę wielokrotnego wyboru
        </button>
        <button
          className="newFormMainPageSaveButton"
          onClick={() => {
            dbmethods.pushItem(new FormDataModel(inputText, formData));
            history.goBack();
          }}
        >
          Zapisz
        </button>

        <Dialog
          open={openHeaderDialog}
          onClose={handleCloseHeaderDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Dodaj nagłówek"}</DialogTitle>
          <DialogContent>
            <input
              className="newFormMainPageInput"
              placeholder={"nagłówek"}
              onChange={(e) => {
                headerSetInputText(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleCloseHeaderDialog(headerInputText, "true")}
            >
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openDescriptionDialog}
          onClose={handleCloseDescriptionDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Dodaj opis"}</DialogTitle>
          <DialogContent>
            <input
              className="newFormMainPageInput"
              placeholder="opis"
              onChange={(e) => {
                descriptionSetInputText(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                handleCloseDescriptionDialog(descriptionInputText, "true")
              }
            >
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openInputDialog}
          onClose={handleCloseInputDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Dodaj pole tekstowe"}</DialogTitle>
          <DialogContent>
            <input
              className="newFormMainPageInput"
              placeholder="nazwa"
              onChange={(e) => {
                inputNameSetInputText(e.target.value);
              }}
            />
            <input
              className="newFormMainPageInput"
              placeholder="opis"
              onChange={(e) => {
                inputDescSetInputText(e.target.value);
              }}
            />
            <input
              className="newFormMainPageInput"
              placeholder="tekst wypełnienia"
              onChange={(e) => {
                inputHintSetInputText(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                handleCloseInputDialog(
                  inputNameInputText,
                  inputDescInputText,
                  inputHintInputText,
                  "true"
                )
              }
            >
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openSingleChoiceListDialog}
          onClose={handleCloseSingleChoiceListDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Dodaj listę jednokrotnego wyboru"}</DialogTitle>
          <DialogContent>
            <input
              className="newFormMainPageInput"
              placeholder="nazwa"
              onChange={(e) => {
                singleChoiceListNameSetInputText(e.target.value);
              }}
            />
            <input
              className="newFormMainPageInput"
              placeholder="opis"
              onChange={(e) => {
                singleChoiceListDescSetInputText(e.target.value);
              }}
            />
            <div className="newItemInputComponent">
              <input
                className="newItemInput"
                placeholder="element listy"
                onChange={(e) => {
                  singleChoiceListNewItemSetInputText(e.target.value);
                }}
              />
              <IconButton
                id="btn"
                style={{ color: colors.grey }}
                aria-label="Dodaj"
                onClick={(e) => {
                  setListItemsData([
                    ...listItemsData,
                    singleChoiceListNewItemInputText,
                  ]);
                }}
              >
                <AddIcon />
              </IconButton>
            </div>
            <ListOfItems list={listItemsData} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                handleCloseSingleChoiceListDialog(
                  listItemsData,
                  singleChoiceListNameInputText,
                  singleChoiceListDescInputText,
                  "true"
                )
              }
            >
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openMultipleChoiceListDialog}
          onClose={handleCloseMultipleChoiceListDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Dodaj listę wielokrotnego wyboru"}</DialogTitle>
          <DialogContent>
            <input
              className="newFormMainPageInput"
              placeholder="nazwa"
              onChange={(e) => {
                multipleChoiceListNameSetInputText(e.target.value);
              }}
            />
            <input
              className="newFormMainPageInput"
              placeholder="opis"
              onChange={(e) => {
                multipleChoiceListDescSetInputText(e.target.value);
              }}
            />
            <div className="newItemInputComponent">
              <input
                className="newItemInput"
                placeholder="element listy"
                onChange={(e) => {
                  multipleChoiceListNewItemSetInputText(e.target.value);
                }}
              />
              <IconButton
                id="btn"
                style={{ color: colors.grey }}
                aria-label="Dodaj"
                onClick={(e) => {
                  setListItemsData([
                    ...listItemsData,
                    multipleChoiceListNewItemInputText,
                  ]);
                }}
              >
                <AddIcon />
              </IconButton>
            </div>
            <ListOfItems list={listItemsData} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                handleCloseMultipleChoiceListDialog(
                  listItemsData,
                  multipleChoiceListNameInputText,
                  multipleChoiceListDescInputText,
                  "true"
                )
              }
            >
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
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
