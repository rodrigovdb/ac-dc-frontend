import React from 'react';
import { Link } from 'react-router-dom';

import './albums-list-item.component.css'

const AlbumsListItem:ReactFC = (props) => {
    return(
        <Link to={`/ac-dc-frontend/albums/${props.id}`}>
            <div className="albumListItem">

                <div className="column">
                    <img alt={props.name} src={props.coverImage} />
                </div>

                <div className="column">
                    <h1>{props.name}</h1>

                    <h2>{props.year}</h2>
                </div>

                <div className="column">
                    <h5>{props.totalDuration}</h5>
                    <h5>{props.songsLength} songs</h5>
                </div>
            </div>
        </Link>
        
    );
}

export default AlbumsListItem;