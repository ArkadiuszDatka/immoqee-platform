import React from 'react';
import ListOfFormElements from '../components/list_of_form_elements';
import InputFormDataModel from '../../../core/data_model/input_form_data_model';

class NewFormPage extends React.Component {
    state = {
        elemetns: [
            InputFormDataModel('name', 'desc', 'hint'), 
            InputFormDataModel('name', 'desc', 'hint')
        ]
    }
    render() {
        return <div>
            <p>Proszę wpisać nazwę formularza</p>
            <input></input>
            <p>Elementy formularza</p>
            <ListOfFormElements list={this.elements} />
        </div>
    }
}

export default NewFormPage;