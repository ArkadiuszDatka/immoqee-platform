export default class MultipleChoiceListDataModel {
    constructor(value, list, name, desc, hint = "Wybierz klilka z dostępnych opcji", type = "MultipleChoiceList") {
        this.value = value;
        this.list = list;
        this.name = name;
        this.desc = desc;
        this.hint = hint;
        this.type = type;
    }
}