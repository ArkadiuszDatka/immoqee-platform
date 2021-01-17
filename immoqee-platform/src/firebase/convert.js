import HeaderDataModel from "../data_model/header_data_model";
import DescriptionDataModel from "../data_model/description_data_model";
import InputDataModel from "../data_model/input_data_model";
import SingleChoiceListDataModel from "../data_model/single_choice_list_data_model";
import MultipleChoiceListDataModel from "../data_model/multiple_choice_list_data_model";
import FormDataModel from "../data_model/form_data_model";

export const convert = {
  convertData: (array) => {
    /* array jest tablicą
           i ma elementy data oraz key,
           data ma obj ( niestety nie można tego pominąć)
           obj ma nazwę oraz elements
        */
    const _returnData = [];
    array.forEach((el) => {
      let _elements = el.data.obj.elements;
      let elements = [];
      let _name = el.data.obj.name;

      _elements.forEach((el) => {
        switch (el.type) {
          case "Header":
            elements.push(new HeaderDataModel(el.value, el.name));
            break;
          case "Input":
            elements.push(
              new InputDataModel(el.value, el.name, el.desc, el.hint)
            );
            break;
          case "Description":
            elements.push(new DescriptionDataModel(el.value, el.name));
            break;
          case "MultipleChoiceList":
            elements.push(
              new MultipleChoiceListDataModel(
                el.value,
                el.list,
                el.name,
                el.desc
              )
            );
            break;
          case "SingleChoiceList":
            elements.push(
              new SingleChoiceListDataModel(el.value, el.list, el.name, el.desc)
            );
            break;
          default:
            break;
        }
      });
      _returnData.push({
        key: el.key,
        data: new FormDataModel(_name, elements),
      });
    });
    return _returnData;
  },
  convertCompany: (array) => {
    const _returnData = [];
    array.forEach((el) => {
      _returnData.push({ value: el.data.name, label: el.data.name });
    });
    return _returnData;
  },
};
