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
                        <Link to={`/ac-dc-frontend/albums/${album.id}`}  key={album.id.toString()}>
                            <li className="AlbumsListItem">
                                <img alt={album.name} src={album.coverImage} />

                                <div className="AlbumListContent">
                                    <h3 className="AlbumsListItemName">
                                        {album.name}
                                    </h3>
                                    <h4 className="AlbumsListItemYear">
                                        {album.year}
                                    </h4>
                                    <h5 className="SongsCount">
                                        <div>{album.totalDuration}</div>
                                        <div>{album.songs.length} songs</div>
                                    </h5>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        )
    }
}