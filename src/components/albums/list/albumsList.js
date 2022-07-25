import React from 'react';

import { useAlbums } from '../../../hooks/albums/useAlbums';
import Loading from '../../loading/loading.component';
import AlbumsListItem from './item/albumsListItem';

import './albumsList.css';

const AlbumsList = () => {
    return(<div>Albums List</div>);
    
    const { error, loading, data } = useAlbums();

    if(loading){
        return <Loading />
    }
    if(error){
        console.log(error);
        //return <div>something went wrong: {error}</div>
    }
    if(data){
        return(
            <div className="albumsList" id="albumsList">
                {data.albums.map((album) => <AlbumsListItem
                    key={album.id}
                    id={album.id}
                    name={album.name}
                    year={album.year}
                    coverImage={album.coverImage}
                    totalDuration={album.totalDuration}
                    songsLength={album.songs.length}
                    songs={album.songs}
                />)}
            </div>
        )
    }
}

export default AlbumsList;