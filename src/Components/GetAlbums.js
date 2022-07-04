import React, { useEffect, useState } from 'react'

import { useQuery, gql } from '@apollo/client'
import { LOAD_ALBUMS } from '../GraphQL/Resolvers'

function GetAlbums() {
    const { error, loading, data } = useQuery(LOAD_ALBUMS)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        if(data) {
            // console.log(data);
            setAlbums(data.albums)
        }
    }, [data])


    return <ul>
        {albums.map((album) => {
            return <li key={album.id.toString()}>{album.name}</li>;
        })}
    </ul>;

}

export default GetAlbums;