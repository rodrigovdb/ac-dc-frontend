import { List } from 'antd';
import React from 'react';

import { useAlbums } from '../hooks/albums/useAlbums';
import Loading from '../components/loading';
import AlbumsListItem from '../components/albumsListItem';

import './albumsPage.css';

const AlbumsPage = () => {
    const { error, loading, data } = useAlbums()

    if(loading){
        return <Loading />
    }
    if(error){
        return <div>something went wrong: {error}</div>
    }
    if(data){
        const albums = data.albums;

        console.log(albums[0])

        return(
            <div className='albumsPage'>
                <List
                    size="large"
                    bordered
                    dataSource={albums}
                    renderItem={(item) => (<AlbumsListItem album={item} />)}
                />
            </div>
        )
    }
}

export default AlbumsPage;