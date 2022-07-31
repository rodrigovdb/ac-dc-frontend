import { List } from 'antd';

import React from 'react';

import AlbumsShowHeader from './albumsShowHeader';
import AlbumsShowSong from './albumsShowSong';

const AlbumsShow = (props) =>{
    return(
        <div className="albumsShow">
            <List
                header={<AlbumsShowHeader
                    coverImage={props.coverImage}
                    name={props.name}
                    year={props.year}
                    totalDuration={props.totalDuration}
                    songsCount={props.songs.length}
                />}
                itemLayout="horizontal"
                size="large"
                bordered
                dataSource={props.songs}
                renderItem={(song) => (<AlbumsShowSong name={song.name} duration={song.duration} />)}
            />
        </div>
    )
}

export default AlbumsShow;