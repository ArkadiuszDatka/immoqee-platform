import firebase from "firebase";

export const dbmethods = {
  fetchItems: () => {
    firebase
      .database()
      .ref("users")
      .on("value", (response) => {
        const data = [];
        response.forEach((item) => {
          data.push({
            info: item.val(),
            key: item.key,
          });
        });
        return data;
      });
  },
  pushItem: (obj) => {
    firebase
      .database()
      .ref("users")
      .push({
        /* TODO: Trzeba uzgodnić co wysyłamy dokładnie do bazy */
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
