import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import "./App.css";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import All_forms from "./pages/All_forms";
import Logout from "./pages/Logout";
import NewFormPage from "./pages/new_form_page";

const App = () => {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  const MainStack = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all_forms" component={All_forms} />
          <Route path="/create_form" component={NewFormPage} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  };
  return <>{token === null ? <Signin /> : <MainStack />}</>;
};
export default App;
