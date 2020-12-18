import React, { useState, useEffect } from "react";

const ListOfFormElements = (props) => {
  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list);
  }, [props]);

  const logg = () => {
    console.log(data);
  };

  return (
    <div className="listOfElements">
      {data.map((item, i) => {
        return (
          <div>
            <ul>
              <li>{item.name}</li>
              <li>{item.desc}</li>
              <li>{item.hint}</li>
              <li>{item.type}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfFormElements;
