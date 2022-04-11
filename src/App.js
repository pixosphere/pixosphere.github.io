// modules
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// src
import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import {StorageProvider} from "./components/StorageContext"

// static
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return <React.Fragment>
    <StorageProvider>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </StorageProvider>
  </React.Fragment>
}

export default App;
