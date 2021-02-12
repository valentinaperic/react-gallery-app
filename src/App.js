import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import apiKey from './config';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.searchPhotos();
  }

  searchPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      console.log(response.data.photos.photo);
      this.setState({
        photos: response.data.photos.photo
      })
    }) 
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm onSearch={this.searchPhotos} />
          <Nav />
          <PhotoGallery data={this.state.photos} />
          <Switch>
            <Route exact path="/tree" render={ () => () => <PhotoGallery data={this.state.tree} /> } />
            <Route exact path="/lake" render={ () => <PhotoGallery data={this.state.lake} /> } />
            <Route exact path="/ocean" render={ () => <PhotoGallery data={this.state.ocean} /> } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
};
