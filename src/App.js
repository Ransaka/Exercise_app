import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar/navbar.component";
import ExerciseList from "./components/ExerciseList/exercise-list.component";
import EditExercise from "./components/EditExercise/edit-exercise.component";
import CreateExercise from "./components/CreateExercise/create-exercise.component";
import CreateUser from "./components/CreateUser/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
