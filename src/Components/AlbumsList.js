import React from 'react';
import { Link } from 'react-router-dom';
import { useAlbums } from '../hooks/useAlbums';

import './AlbumsList.css';

export default function AlbumsList() {
    const { error, loading, data } = useAlbums()
    // console.log({ error, loading, data})

    if(loading){
        return <div>spinner...</div>
    }
    if(error){
        return <div>something went wrong</div>
    }
    if(data){
        return(
            <ul className="AlbumsList">
                {data.albums.map(album => {
                    return (
                        <Link to={`/ac-dc-frontend/${album.id}`}  key={album.id.toString()}>
                            <li className="AlbumsListItem">
                                <img alt={album.name} src={album.coverImage} />
                                <h3 className="AlbumsListItemText">
                                    {album.name}
                                </h3>
                                <span className="SongsCount">
                                    <div>{album.songs.length} songs</div>
                                    <div>{album.totalDuration}</div>
                                </span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        )
    }
}