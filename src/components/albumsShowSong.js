import { List } from 'antd';

import React from 'react';

const AlbumsShowSong = (props) => {
    return(
        <List.Item>
            <List.Item.Meta
                    title={`${props.sort}. ${props.name}`}
            />
            
            <div>{props.duration}</div>
        </List.Item>
    );
}

export default AlbumsShowSong;