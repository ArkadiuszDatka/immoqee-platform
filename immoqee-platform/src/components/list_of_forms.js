import React, { useState, useEffect } from "react";
import "./list_of_forms.css";

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
            <h5>{item.name}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfForms;