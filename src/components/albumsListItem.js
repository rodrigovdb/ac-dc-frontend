import { Avatar, List, Skeleton } from 'antd';

import React from 'react';

const AlbumsListItem = (props) => {
    const album = props.album;

    return(
        <List.Item>
            <Skeleton avatar title={false} loading={album.loading} active>
                <List.Item.Meta
                    avatar={<Avatar src={album.coverImage} />}
                    title={album.name}
                    description={album.year}
                    />
                <div>
                    <p>
                        {album.songs.length} Songs
                    </p>
                    <p>
                        {album.totalDuration} Minutes
                    </p>
                </div>
            </Skeleton>
        </List.Item>
    )
}

export default AlbumsListItem;