import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import "./App.css";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import All_forms from "./pages/All_forms";
import Logout from "./pages/All_forms";
import NewFormPage from "./features/new_forms/pages/new_form_page";

const App = () => {
  const { token } = useContext(firebaseAuth);
  const StackManager = (props) => {
    console.log(token);
    if (token === null) {
      return <Signin />;
    } else {
      return (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/all_forms" component={All_forms} />
            <Route path="/create_form" component={NewFormPage} />
            <Route path="/logout" component={Home} />
          </Switch>
        </Router>
      );
    }
  };
  return (
    <>
      <StackManager token={token} />
    </>
  );
};
export default App;
