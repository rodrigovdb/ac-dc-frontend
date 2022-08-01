import React from 'react';
import { useParams } from 'react-router';

import { useAlbum } from '../hooks/useAlbum';
import Loading from '../components/loading';
import AlbumsShow from '../components/albumsShow';

const AlbumPage = () =>{
    const { id } = useParams()

    const { error, loading, data } = useAlbum(id);

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        const album = data.album;

        return (
            <AlbumsShow
                id={album.id}
                name={album.name}
                coverImage={album.coverImage}
                totalDuration={album.totalDuration}
                year={album.year}
                songs={album.songs}
            />
        );
    }
}

export default AlbumPage;