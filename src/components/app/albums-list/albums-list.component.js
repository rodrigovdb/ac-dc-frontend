import React from 'react';

//import '../../../interfaces/album.interface';
import AlbumsListItem from './albums-list-item/albums-list-item.component';

const AlbumsList = (albums) => {
    //console.log(albums.albums);

    return(
        <div className="albumsList">
            {albums.albums.map((album) => <AlbumsListItem
                key={album.id}
                id={album.id}
                name={album.name}
                year={album.year}
                coverImage={album.coverImage}
                totalDuration={album.totalDuration}
                songsLength={album.songs.length}
            />)}
        </div>
    );
}

export default AlbumsList;