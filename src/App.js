import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import Demos from './pages/demos';
import Header from './components/Header'
import Content  from './components/Content'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demos" component={Demos} />
        </Switch>
      </Router>
      <Content />
    </>
  );
}



export default App;
