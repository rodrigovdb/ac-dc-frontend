import { List } from 'antd';

import React from 'react';

import AlbumsShowHeader from './albumsShowHeader';
import AlbumsShowSong from './albumsShowSong';
import SongsForm from './songsForm';

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
                footer={<SongsForm albumId={props.id} />}
                itemLayout="horizontal"
                size="large"
                bordered
                dataSource={props.songs}
                renderItem={(song) => (<AlbumsShowSong name={song.name} duration={song.duration} sort={song.sort} />)}
            />
        </div>
    )
}

export default AlbumsShow;