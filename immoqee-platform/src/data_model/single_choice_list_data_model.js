export default class SingleChoiceListDataModel {
    constructor(value, list, name, desc, hint = "Wybierz jedeną z dostępnych opcji", type = "SingleChoiceList") {
        this.value = value;
        this.list = list;
        this.name = name;
        this.desc = desc;
        this.hint = hint;
        this.type = type;
    }
}