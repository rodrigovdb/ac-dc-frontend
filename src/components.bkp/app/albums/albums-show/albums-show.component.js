import React from 'react';

import AlbumsShowSong from './albums-show-song/albums-show-song.component';

import './albums-show.component.css'

const AlbumsShow = (album) => {
    album = album.album

    return(
        <div className="albumsShow">
            <div className="albumsShowInfo">
                <div>
                    <img alt={album.name} src={album.coverImage} className="albumImage" />
                </div>

                <div className="albumsShowInfoText">
                    <h1>{album.name}</h1>

                    <h3>Year: {album.year}</h3>
                    <h3>Duration: {album.totalDuration}</h3>
                </div>
            </div>

            <div className="albumSongs">
                {album.songs.map(song => <AlbumsShowSong key={song.id} song={song} />)}
            </div>
        </div>
    );
}

export default AlbumsShow;