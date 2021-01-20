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
    const temp_table = [];
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
      /*
      COŚ TAKIEGO POTRZEBUJEMY:
      const [forms, setForms] = useState([{
      business: "firma1",
      listForms: [
        new FormDataModel("form1", []),
        new FormDataModel("form2", []),
        new FormDataModel("form3", []),
      ]
      },
      {
      business: "firma2",
      listForms: [
        new FormDataModel("form1", []),
        new FormDataModel("form2", []),
        new FormDataModel("form3", []),
      ]
      }]);
      */
      _returnData.push({
        key: el.key,
        company: el.data.company,
        data: new FormDataModel(_name, elements),
      });
      let form_object = {
        key: el.key,
        company: el.data.company,
        data: new FormDataModel(_name, elements),
      };
      let pos = temp_table
        .map((e) => {
          return e.business;
        })
        .indexOf(el.data.company);

      if (pos === -1) {
        temp_table.push({
          business: el.data.company,
          listForms: [form_object],
        });
      } else temp_table[pos].listForms.push(form_object);
    });
    return temp_table;
  },
  convertCompany: (array) => {
    const _returnData = [];
    array.forEach((el) => {
      _returnData.push({ value: el.data.name, label: el.data.name });
    });
    return _returnData;
  },
};
