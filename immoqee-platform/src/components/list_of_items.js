import React, { useState, useEffect } from "react";
import "./list_of_items.css";

const ListOfItems = (props) => {
  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list);
  }, [props]);

  return (
    <div className="listOfItems">
      {data.map((item, i) => {
        return (
          <div className="listOfItemsCard">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfItems;