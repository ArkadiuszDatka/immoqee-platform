import React, { useState, useEffect } from "react";
import "./list_of_form_elements.css";

const ListOfFormElements = (props) => {
  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list);
  }, [props]);

  return (
    <div className="listOfElements">
      {data.map((item, i) => {
        return (
          <div className="listOfElementsCard">
            <h3>{item.type}</h3>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfFormElements;
