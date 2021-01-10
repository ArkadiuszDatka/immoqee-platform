import React, { useState, useEffect } from "react";
import "./list_of_forms.css";
import Button from "@material-ui/core/Button";
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

  return (
    <div className="listOfForms">
      {data.map((item, i) => {
        return (
          <div className="listOfFormsCard">
            <div className="rowElements">
              <h6>{item.data.name}</h6>
              <IconButton
                id="btn"
                className="btton"
                style={{ color: colors.grey }}
                aria-label="Uzupełnij"
                onClick={(e) => {
                  props.editForm(data[i].data);
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
                  dbmethods.deleteItem(data[i].key);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfForms;
