import { gql } from "@apollo/client"

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
        album {
            songs {
                id
                name
                sort
                duration
            }
        }
    }
}
`