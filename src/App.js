import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './App.css';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searchText: ''
    }
  }

  performSearch = (query) => {
    console.log(`searchText: ${query}`);
    this.setState({ searchText: query });
    console.log(`searchText State: ${this.state.searchText}`);
   
  }

  render() { 
    let text = this.state.searchText;
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <PhotoGallery data={text} />
          <Route path="/search/:query" render={(props) => (
            <PhotoGallery key={props.location.key} {...props} />
          )} />
        </BrowserRouter>
      </div>
    )
  }
};
