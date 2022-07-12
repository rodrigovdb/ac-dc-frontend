import React from 'react';

import AlbumsList from '../../components/app/albums-list/albums-list.component';
import '../../interfaces/album.interface';

const AlbumsPage = () => {
    const albums = [
        {
            id: 1,
            name: 'High Voltage',
            year: 1976,
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Acdc_high_voltage_international_album.jpg',
            totalDuration: '44:15',
            songs: []
        }

    ]

    //console.log(albums)

    return <AlbumsList albums={albums} />
};

export default AlbumsPage;