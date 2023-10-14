import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Layout/Navbar";
import { AddVolunteer } from "./components/Volunteer/AddVolunteer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EditVolunteer } from "./components/Volunteer/EditVolunteer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/volunteer/add" component={AddVolunteer} />
          <Route exact path="/volunteer/edit/:id" component={EditVolunteer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
