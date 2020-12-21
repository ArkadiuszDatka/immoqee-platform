import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import All_forms from "./pages/All_forms";
import NewFormPage from "./features/new_forms/pages/new_form_page";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all_forms" component={All_forms} />
          <Route path="/create_form" component={NewFormPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
