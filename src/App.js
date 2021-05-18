import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchQuery: { title: '', photos: []},
      tree: { title: 'tree', photos: []},
      lake: { title: 'lake', photos: []},
      ocean: { title: 'ocean', photos: []}
    }
  }

  componentDidMount() {
    this.searchPhotos();
    //get data for nav buttons 
    this.searchPhotos(this.state.tree.title);
    this.searchPhotos(this.state.lake.title);
    this.searchPhotos(this.state.ocean.title);
  }

  /**
   * search for photos using the flickr API
   * @param {string} query 
   */

  searchPhotos = (query) => {
    const REACT_APP_API_KEY = 1;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      switch(query) {
        case 'tree':
          this.setState({
            tree: { title: 'tree', photos: response.data.photos.photo }
          })
          break;
        case 'lake':
          this.setState({
            lake: { title: 'lake', photos: response.data.photos.photo }
          })
          break;
        case 'ocean':
          this.setState({
            ocean: { title: 'ocean', photos: response.data.photos.photo }
          })
          break;
        default:
          //a search query
          this.setState({
            searchQuery: { title: query, photos: response.data.photos.photo }
          })
      }
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
          <Switch> 
            <Route exact path="/search/tree" render={ () => <PhotoGallery title={this.state.tree.title} data={this.state.tree.photos} /> } />
            <Route exact path="/search/lake" render={ () => <PhotoGallery title={this.state.lake.title} data={this.state.lake.photos} /> } />
            <Route exact path="/search/ocean" render={ () => <PhotoGallery title={this.state.ocean.title} data={this.state.ocean.photos} /> } />
            <Route path="/search/:query" render={ () => <PhotoGallery title={this.state.searchQuery.title} data={this.state.searchQuery.photos} /> } />  
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
};