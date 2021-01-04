export default class DescriptionDataModel {
    constructor(value, name, hint = "Podaj opis pola", type = "Description") {
        this.value = value;
        this.name = name;
        this.hint = hint;
        this.type = type;
    }
}