import firebase from "firebase";
import firebaseconfig from "./firebaseIndex";

export const authMethods = {
  signin: (name, password, setErrors, setToken, setInputs) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        name + process.env.REACT_APP_HIDDEN_ADDITION,
        password
      )
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        setToken(window.localStorage.token);
        setInputs({ name: "", password: "" });
        setErrors([]);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },

  signout: (setErrors, setToken) => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem("token");
        setToken(null);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        localStorage.removeItem("token");
        setToken(null);
        console.error(err.message);
      });
  },
};
