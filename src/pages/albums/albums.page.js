import React from 'react';

import { useAlbums } from '../../hooks/albums/useAlbums';
import Album from '../../models/album.model';
import AlbumsList from '../../components/app/albums/albums-list/albums-list.component';
import Loading from '../../components/app/loading/loading.component';

const AlbumsPage = () => {
    const { error, loading, data } = useAlbums()

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        const albums = data.albums.map((album) => Album.fromJson(album));

        return <AlbumsList albums={albums || []} />
    }
};

export default AlbumsPage;