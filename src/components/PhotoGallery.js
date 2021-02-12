import React from 'react';
import Photo from './Photo';

const PhotoGallery = props => {

    const { data } = props;
    let photos;
    if (data.length > 0) {
        photos = data.map(element =>
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

export default PhotoGallery;