import React from 'react';
import { Link } from 'react-router-dom';

import './albumsListItem.scss';

const AlbumsListItem = (album) => {
    return(
        <div className="albumListItem">
            <Link to={`/ac-dc-frontend/albums/${album.id}`}>
                <div className="albumInfo">
                    <div className="imageContainer">
                        <img alt={album.name} src={album.coverImage} />
                    </div>

                    <div className="infoContainer">
                        <div className="albumTitleAndYear">
                            <h2>{album.name}</h2>

                            <h4>{album.year}</h4>
                        </div>

                        <div className="albumDurationAndTracks">
                            <h5>{album.totalDuration}</h5>
                            <h5>{album.songsLength} songs</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AlbumsListItem;