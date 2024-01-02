
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  pageSize=15;
  apiKey="9f5d0153e76c47c08b63c52966f2f681"
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
       


        <Routes>
          <Route exact apiKey = {this.apiKey} path="/" element={< News  key='general' pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/business" element={ <News key='business'  pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/entertainment" element={<News key='entertainment'  pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/general" element={ <News key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/health" element={ <News key='health'  pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/science" element={ <News key='science'  pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/sports" element={ <News key='sports'  pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/technology" element={ <News  key='technology' pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          <Route exact apiKey = {this.apiKey} path="/about" element={ <News  key='technology' pageSize={this.pageSize} country="in" category="general"/>}></Route>

        </Routes>
        </Router>
      </div>
      
    )
  }
}

