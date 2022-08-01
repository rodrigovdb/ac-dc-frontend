import { useMutation, gql } from "@apollo/client"

export const SONG_CREATE = gql`
mutation SongCreate($albumId: String!, $name: String!, $duration: String!){
    songCreate(
    input: {
        albumId: $albumId,
        name: $name,
        duration: $duration
    }
    ) {
        id
        name
        duration
        album {
            id
            name
        }
    }
}
`

export const useSongCreate = (albumId, name, duration) => {
    const [songCreate, {data, loading, error}] = useMutation(SONG_CREATE, {
        variables: {
            albumId: albumId,
            name: name,
            duration: duration
        }
    })

    return [songCreate, { data, loading, error}];
}