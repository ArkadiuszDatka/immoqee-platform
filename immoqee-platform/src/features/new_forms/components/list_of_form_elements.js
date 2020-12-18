import React from 'react';

const ListOfFormElements = props => {
    return <div className="listOfElements">
        {props.elements.name}
    </div>
}

export default ListOfFormElements;