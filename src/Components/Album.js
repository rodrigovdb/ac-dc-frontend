import React from 'react'
import { useAlbum } from '../hooks/useAlbum'

import './Album.css';

export default function Album(){
    const { error, loading, data } = useAlbum(2);

    // console.log(error, loading, data)

    if(loading){
        return <div>spinner...</div>
    }
    if(error){
        return <div>something went wrong</div>
    }
    if(data){
        let album = data.album
        let track = 0

        return(
            <div className="albumDetails">
                <img alt={album.name} src={album.coverImage} className="albumImage" />
                <h2>{album.name}</h2>

                <div className="albumSongs">
                    <ul>
                        {album.songs.map(song => {
                            track++
                            return(
                                <li key={song.id}>
                                    {track}. {song.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}