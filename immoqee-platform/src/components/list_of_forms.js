import React, { useState, useEffect } from "react";
import "./list_of_forms.css";
import { dbmethods } from "../firebase/dbmethods";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { colors } from "@material-ui/core";

const ListOfForms = (props) => {
  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list);
  }, [props]);

  /*
    COŚ TAKIEGO POTRZEBUJEMY:
    {
      company: nazwa,
      forms: []
    }
  */

  return (
    <div className="listOfLists">
      {data.map((itemG, i) => {
        return (
          <div key={i} className="businessCard">
            <h6 className="businessTitle">{itemG.business}</h6>
            <div className="listOfForms">
              {itemG.listForms.map((item, i) => {
                return (
                  <div key={i} className="listOfFormsCard">
                    <div className="rowElements">
                      <h6>{item.data.name}</h6>
                      <IconButton
                        id="btn"
                        className="btton"
                        style={{ color: colors.grey }}
                        aria-label="Uzupełnij"
                        onClick={(e) => {
                          props.editForm(item.data);
                          props.editState(true);
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        id="btn"
                        className="btton"
                        style={{ color: colors.grey }}
                        aria-label="Usuń"
                        onClick={(e) => {
                          dbmethods.deleteItem(item.key);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfForms;
