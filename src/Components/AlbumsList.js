import React from 'react';

import { useQuery, gql } from "@apollo/client"

import { LOAD_ALBUMS } from '../GraphQL/Resolvers'
import './AlbumsList.css';

import { Row, Col, Collection, CollectionItem } from 'react-materialize'; 

export default function AlbumsList() {
    const { error, loading, data } = useQuery(LOAD_ALBUMS)

    // console.log({ error, loading, data})

    if(loading){
        return <div>spinner...</div>
    }
    if(error){
        return <div>something went wrong</div>
    }
    if(data){
        return(
            <ul className="AlbumsList">
                {data.albums.map(album => {
                    return (
                        <li className="AlbumsListItem" key={album.id.toString()}>
                            <img src={album.coverImage} />
                            <h3 className="AlbumsListItemText">
                                {album.name}
                            </h3>
                            <span className="SongsCount">
                                {album.songs.length} songs
                            </span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}