import React, { Component } from 'react';

export default class NotFound extends Component {
    render() {
        return (
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>That search did not return any results, please try again.</p>
            </li>
        );
    }
}
