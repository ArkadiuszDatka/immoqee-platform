import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

  const [headerInputText, headerSetInputText] = useState("");

  const [openHeaderDialog, setOpenHeaderDialog] = React.useState(false);
  const [openDescriptionDialog, setOpenDescriptionDialog] = React.useState(false);
  const [openInputDialog, setOpenInputDialog] = React.useState(false);
  const [openSingleChoiceListDialog, setOpenSingleChoiceListDialog] = React.useState(false);
  const [openMultipleChoiceListDialog, setOpenMultipleChoiceListDialog] = React.useState(false);

  const handleClickOpenHeaderDialog = () => {
    setOpenHeaderDialog(true);
  };
  const handleCloseHeaderDialog = () => {
    setOpenHeaderDialog(false);
  };

  const handleClickOpenDescriptionDialog = () => {
    setOpenDescriptionDialog(true);
  };
  const handleCloseDescriptionDialog = () => {
    setOpenDescriptionDialog(false);
  };

  const handleClickOpenInputDialog = () => {
    setOpenInputDialog(true);
  };
  const handleCloseInputDialog = () => {
    setOpenInputDialog(false);
  };

  const handleClickOpenSingleChoiceListDialog = () => {
    setOpenSingleChoiceListDialog(true);
  };
  const handleCloseSingleChoiceListDialog = () => {
    setOpenSingleChoiceListDialog(false);
  };

  const handleClickOpenMultipleChoiceListDialog = () => {
    setOpenMultipleChoiceListDialog(true);
  };
  const handleCloseMultipleChoiceListDialog = () => {
    setOpenMultipleChoiceListDialog(false);
  };

  HeaderDataModel newHeader = new HeaderDataModel("", "");

  return (
    <div className="newFormMainPage">
      <h1 className="newFormMainPageH1">Podaj nazwę formularza</h1>
      <input
        className="newFormMainPageInput"
        placeholder="Nazwa"
        onChange={(e) => {
          setInputText(e.target.value);
        }} />
      <h1 className="newFormMainPageH1">Elementy formularza</h1>
      <ListOfFormElements list={formData} />{" "}
      <div className="newFormMainPageButtonBar">
        <button className="newFormMainPageAddButton" onClick={handleClickOpenHeaderDialog}>
          Dodaj nagłówek
        </button>
        <button className="newFormMainPageAddButton" onClick={handleClickOpenDescriptionDialog}>
          Dodaj opis
        </button>
        <button
          className="newFormMainPageAddButton" onClick={handleClickOpenInputDialog}>
          Dodaj pole tekstowe
        </button>
        <button className="newFormMainPageAddButton" onClick={handleClickOpenSingleChoiceListDialog}>
          Dodaj listę jednokrotnego wyboru
        </button>
        <button className="newFormMainPageAddButton" onClick={handleClickOpenMultipleChoiceListDialog}>
          Dodaj listę wielokrotnego wyboru
        </button>
        <button className="newFormMainPageSaveButton" onClick={() => { }}>
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
            <DialogContentText>
              <div>
                <input
                  className="newFormMainPageInput"
                  placeholder={newHeader.hint}
                  onChange={(e) => {
                    headerSetInputText(e.target.value);
                    newHeader.name = e.target.value;
                  }} />
              </div>
              elementy nagłóka
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseHeaderDialog}>Dodaj</Button>
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
            <DialogContentText>
              elementy opisu
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDescriptionDialog}>Dodaj</Button>
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
            <DialogContentText>
              elementy pola tekstowego
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseInputDialog}>Dodaj</Button>
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
            <DialogContentText>
              elementy listy jednokrotnego wyboru
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSingleChoiceListDialog}>Dodaj</Button>
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
            <DialogContentText>
              elementy listy wielokrotnego wyboru
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseMultipleChoiceListDialog}>Dodaj</Button>
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
