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
  pushItem: (obj) => {
    // Załatwione
    firebase
      .database()
      .ref()
      .push({
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
