import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
<<<<<<< HEAD
import AddCourse from "./components/AddCourse";
=======
>>>>>>> Saving

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
<<<<<<< HEAD
          <Route path="/course" component={AddCourse} />
=======
>>>>>>> Saving
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
