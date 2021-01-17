import firebase from "firebase";
import { convert } from "./convert";

export const dbmethods = {
  fetchItems: (setState) => {
    firebase
      .database()
      .ref()
      .on("value", (response) => {
        const data = [];
        response.forEach((item) => {
          data.push({
            data: item.val(),
            key: item.key,
          });
        });
        setState(convert.convertData(data));
      });
  },
  pushCompany: (name) => {
    firebase.database().ref("company/").push({
      name: name,
    });
  },
  getCompany: (setState) => {
    firebase
      .database()
      .ref("company/")
      .on("value", (response) => {
        const data = [];
        response.forEach((item) => {
          data.push({
            data: item.val(),
          });
        });
        const _data = convert.convertCompany(data);
        setState(_data);
      });
  },
  pushItem: (name, obj) => {
    // Załatwione
    firebase
      .database()
      .ref()
      .push({
        company: name,
        obj,
      })
      .catch((error) => console.log(error));
  },
  deleteItem: (key) => {
    firebase.database().ref().child(key).remove();
  },
  updateItem: (key) => {
    firebase
      .database()
      .ref(key)
      .set({
        /* TODO: Trzeba uzgodnić co wysyłamy dokładnie do bazy */
      })
      .catch((error) => console.log(error));
  },
};
