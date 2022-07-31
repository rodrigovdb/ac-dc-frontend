import { Avatar, List, Skeleton } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';

import './albumsListItem';

const AlbumsListItem = (props) => {
    const album = props.album;

    return(
            <List.Item>
                <List.Item.Meta
                    avatar={<Link className="albumsListItem" to={`/ac-dc-frontend/albums/${album.id}`}><Avatar src={album.coverImage} /></Link>}
                    title={<Link className="albumsListItem" to={`/ac-dc-frontend/albums/${album.id}`}>{album.name}</Link>}
                    description={album.year}
                />

                <div>
                    <p>{album.songs.length} Songs</p>
                    <p>{album.totalDuration} Minutes</p>
                </div>
            </List.Item>
    )
}

export default AlbumsListItem;