import React from 'react';

import './albums-show-song.component.css'

const AlbumsShowSong = (song) => {
    song = song.song

    return(
        <div className="albumsShowSong">
            <div className="songSort">
                {song.sort}.
            </div>
            <div className="songNameAndDurationContainer">
                <div>
                    {song.name}
                </div>

                <div>
                    {song.duration}
                </div>
            </div>

        </div>
    )
}

export default AlbumsShowSong;