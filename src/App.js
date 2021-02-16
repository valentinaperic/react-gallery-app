import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios';
import apiKey from './config';

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

  componentDidMount() {
    this.searchPhotos();
  }

  performSearch = async (query) => {
    console.log(`searchText: ${query}`);
    await this.setState({ searchText: query });
    console.log(`searchText State: ${this.state.searchText}`);
  }


  searchPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                photos: response.data.photos.photo
            })
        }) 
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        }
    ); 
  }


  render() { 
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <PhotoGallery data={this.state.photos} />
          <Route path="/search/:query" render={(props) => (
            <PhotoGallery key={props.location.key} data={this.state.photos} />
          )} />
        </BrowserRouter>
      </div>
    )
  }
};
