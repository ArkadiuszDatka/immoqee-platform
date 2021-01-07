import React, { useState, useEffect } from "react";
import "./list_of_forms.css";
import Button from "@material-ui/core/Button";

const ListOfForms = (props) => {
  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list);
  }, [props]);

  return (
    <div className="listOfForms">
      {data.map((item, i) => {
        return (
          <button
            className="listOfFormsCard"
            onClick={() => {
              alert("asd");
              props.editState(true);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default ListOfForms;
