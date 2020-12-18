export default class InputFormDataModel {
  constructor(name, desc, hint, type = "Input") {
    this.type = type;
    this.name = name;
    this.desc = desc;
    this.hint = hint;
  }
}

/*
  state = {
    name:"",
    desc:"",
  }
*/
