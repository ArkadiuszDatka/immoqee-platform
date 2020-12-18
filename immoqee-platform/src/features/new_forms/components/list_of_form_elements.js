import React from 'react';

const ListOfFormElements = props => {
    return <div className="listOfElements">
        {props.list[0].name}
    </div>
}

export default ListOfFormElements;