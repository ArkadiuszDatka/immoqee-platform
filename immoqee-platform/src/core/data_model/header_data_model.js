export default class HeaderDataModel {
    constructor(value, name, hint = "Podaj nazwę nagłówka", type = "Header") {
        this.value = value;
        this.name = name;
        this.hint = hint;
        this.type = type;
    }
}