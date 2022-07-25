import React from 'react';
import { Link } from 'react-router-dom';

import './albums-list-item.component.css'

const AlbumsListItem:ReactFC = (props) => {
    return(
        <Link to={`/ac-dc-frontend/albums/${props.id}`}>
            <div className="albumListItem">

                <div className="imageContainer">
                    <img alt={props.name} src={props.coverImage} />
                </div>

                <div className="infoContainer">
                    <div className="albumTitleAndYear">
                        <h2>{props.name}</h2>

                        <h4>{props.year}</h4>
                    </div>

                    <div className="albumDurationAndTracks">
                        <h5>{props.totalDuration}</h5>
                        <h5>{props.songsLength} songs</h5>
                    </div>
                </div>
            </div>
        </Link>
        
    );
}

export default AlbumsListItem;