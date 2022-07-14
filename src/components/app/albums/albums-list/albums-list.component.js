import React from 'react';

import AlbumsListItem from './albums-list-item/albums-list-item.component';

import './albums-list.component.css'

const AlbumsList = (albums) => {

    albums = albums.albums

    return(
        <div className="albumsList">
            {albums.map((album) => <AlbumsListItem
                key={album.id}
                id={album.id}
                name={album.name}
                year={album.year}
                coverImage={album.coverImage}
                totalDuration={album.totalDuration}
                songsLength={album.songs.length}
            />)}
        </div>
    );
}

export default AlbumsList;