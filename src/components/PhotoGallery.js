import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoGallery = props => {

    const { data, title } = props;

    let photos;
    let resultsTitle;

    //check for results
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
        resultsTitle = `${title} Results`;
    } else {
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>{resultsTitle}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoGallery;