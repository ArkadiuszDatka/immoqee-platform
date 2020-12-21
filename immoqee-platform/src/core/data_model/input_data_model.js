export default class InputDataModel {
  constructor(value, name, desc, hint, type = "Input") {
    this.value = value;
    this.name = name;
    this.desc = desc;
    this.hint = hint;
    this.type = type;
  }
}

