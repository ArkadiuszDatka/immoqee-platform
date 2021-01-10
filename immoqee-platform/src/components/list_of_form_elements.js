import React, { useState, useEffect } from "react";
import "./list_of_form_elements.css";
import { dbmethods } from "../firebase/dbmethods";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { colors } from "@material-ui/core";

const ListOfFormElements = (props) => {
  const [data, setData] = useState(props.list.data);

  useEffect(() => {
    setData(props.list.data);
  }, [props]);

  return (
    <div className="listOfElements">
      {data.map((item, i) => {
        return (
          <div className="listOfElementsCard">
            <div>
              <h3>{item.type}</h3>
              <p>{item.name}</p>
            </div>
            <IconButton
              id="btn"
              style={{ color: colors.grey }}
              aria-label="Cofnij"
              onClick={(e) => {
                setData(data.splice(i, 1));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfFormElements;
