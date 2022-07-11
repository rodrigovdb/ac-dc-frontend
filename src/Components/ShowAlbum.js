import React from 'react'
import { useParams } from 'react-router';

import { useAlbum } from '../hooks/useAlbum'
import Loading from './Loading';

import './Album.css';

export default function ShowAlbum(){
    const {id} = useParams()
    const { error, loading, data } = useAlbum(id);

    if(loading){
        return <Loading />
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
                <h1>{album.name}</h1>

                <h3>Year: {album.year}</h3>
                <h3>Duration: {album.totalDuration}</h3>

                <div className="albumSongs">
                    <ul>
                        {album.songs.map(song => {
                            track++
                            return(
                                <li key={song.id}>
                                    <span>{song.sort}. </span>
                                    <span>{song.name}</span>
                                    <span className="songDuration">{song.duration}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}