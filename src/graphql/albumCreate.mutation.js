import { gql } from "@apollo/client"

export const ALBUM_CREATE = gql`
mutation AlbumCreate($name: String!, $year: Int!, $coverImage: String!){
    albumCreate(
    input: {
        name: $name,
        year: $year,
        coverImage: $coverImage
    }
    ) {
        id
        name
        year
        coverImage
    }
}
`