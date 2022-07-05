import React from 'react'
import { useParams } from 'react-router';
import { useAlbum } from '../hooks/useAlbum'

import './Album.css';

export default function Album(){
    const {id} = useParams()
    const { error, loading, data } = useAlbum(id);

    if(loading){
        return <div>spinner...</div>
    }
    if(error){
        console.log(error)
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