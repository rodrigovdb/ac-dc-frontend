import React from 'react';

import { useAlbums } from '../../hooks/albums/useAlbums';
import AlbumsList from '../../components/app/albums-list/albums-list.component';

const AlbumsPage = () => {
    const albums = useAlbums();

    return <AlbumsList albums={albums || []} />
};

export default AlbumsPage;