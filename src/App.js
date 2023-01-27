import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Home';
import Quote from './component/Quote';
import Nav from './component/Nav';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>

    );
  }
}
