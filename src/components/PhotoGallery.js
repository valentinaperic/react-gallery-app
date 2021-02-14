import React, { Component } from 'react';
import Photo from './Photo';
import axios from 'axios'
import apiKey from '../config';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          photos: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        //this.searchPhotos();
    }


    searchPhotos = () => {
        const { query } = this.props.match.params;
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
        let photos;
        if (this.state.photos.length > 0) {
            photos = this.state.photos.map(element =>
                <Photo 
                    key={element.id}
                    server={element.server} 
                    id={element.id} 
                    secret={element.secret} 
                    title={element.title}
                />
            );
        }

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
};