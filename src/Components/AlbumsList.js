import React from 'react';

import { useAlbums } from '../hooks/useAlbums';
import AlbumRow from './AlbumList/AlbumRow';
import Loading from './Loading';

import './AlbumsList.css';

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