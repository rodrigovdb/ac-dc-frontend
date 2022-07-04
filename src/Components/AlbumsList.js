import React from 'react';
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
                        <li className="AlbumsListItem" key={album.id.toString()}>
                            <img alt={album.name} src={album.coverImage} />
                            <h3 className="AlbumsListItemText">
                                {album.name}
                            </h3>
                            <span className="SongsCount">
                                {album.songs.length} songs
                            </span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}