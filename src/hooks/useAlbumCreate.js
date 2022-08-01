import { useMutation, gql } from "@apollo/client"

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

export const useAlbumCreate = (name, year, coverImage) => {
    const [albumCreate, {data, loading, error}] = useMutation(ALBUM_CREATE, {
        variables: {
            name: name,
            year: parseInt(year),
            coverImage: coverImage
        }
    })

    return [albumCreate, { data, loading, error}];
}