import React from 'react';

import { useAlbums } from '../../hooks/albums/useAlbums';
import AlbumsList from '../../components/app/albums-list/albums-list.component';
import Loading from '../../components/loading/loading.component';

const AlbumsPage = () => {
    const { error, loading, data } = useAlbums()

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        //console.log(data);

        return <AlbumsList albums={data.albums || []} />
    }
};

export default AlbumsPage;