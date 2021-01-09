import firebase from "firebase";

export const dbmethods = {
  fetchItems: () => {
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
        return data;
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
    firebase.database().child(key).remove();
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
