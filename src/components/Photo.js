import React from 'react';

const Photo = ({server, id, secret, title}) => (
    <li>
        <img key={id} src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
);

export default Photo;
