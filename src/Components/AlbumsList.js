import React from 'react';

import { useQuery, gql } from "@apollo/client"

import { LOAD_ALBUMS } from '../GraphQL/Resolvers'
import './AlbumsList.css';

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
            <div className="AlbumsList">
                {data.albums.map(album => {
                    return (
                        <div className="AlbumsListItem" key={album.id.toString()}>
                            <img src={album.coverImage} />
                            <span className="AlbumsListItemText">
                                {album.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}