import React from 'react';
import { useParams } from 'react-router';

import { useAlbum } from '../../hooks/albums/useAlbum';
import Album from '../../models/album.model';
import AlbumsShow from '../../components/app/albums/albums-show/albums-show.component';
import Loading from '../../components/app/loading/loading.component';

const AlbumsShowPage = () => {
    const {id} = useParams()
    const { error, loading, data } = useAlbum(id);

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        const album = Album.fromJson(data.album);
        console.log(album.name)

        return <AlbumsShow album={album} />
    }
};

export default AlbumsShowPage;