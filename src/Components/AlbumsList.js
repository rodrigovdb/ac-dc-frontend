import React from 'react';
import { Link } from 'react-router-dom';

import { useAlbums } from '../hooks/useAlbums';
import Loading from './Loading';

import './AlbumsList.css';

function AlbumRow(props) {
    return (
        <Link to={`/ac-dc-frontend/albums/${props.id}`}>
            <li className="AlbumsListItem">
                <img alt={props.name} src={props.coverImage} />

                <div className="AlbumListContent">
                    <h3 className="AlbumsListItemName">
                        {props.name}
                    </h3>
                    <h4 className="AlbumsListItemYear">
                        {props.year}
                    </h4>
                    <h5 className="SongsCount">
                        <div>{props.totalDuration}</div>
                        <div>{props.songsLength} songs</div>
                    </h5>
                </div>
            </li>
        </Link>
    )
}

export default function AlbumsList() {
    const { error, loading, data } = useAlbums()
    // console.log({ error, loading, data})

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong</div>
    }
    if(data){
        return(
            <ul className="AlbumsList">
                { data.albums.map((album) => <AlbumRow
                    key={album.id.toString()}
                    id={album.id}
                    name={album.name}
                    year={album.year}
                    coverImage={album.coverImage}
                    totalDuration={album.totalDuration}
                    songsLength={album.songs.length}
                />) }
            </ul>
        )
    }
}