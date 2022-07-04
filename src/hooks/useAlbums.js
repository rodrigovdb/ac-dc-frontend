import { useQuery, gql } from "@apollo/client"

export const LOAD_ALBUMS = gql`
    query {
        albums {
            id
            name
            coverImage
            songs {
                id
                name
            }
        }
    }
`
export const useAlbums = () => {
    const { error, loading, data } = useQuery(LOAD_ALBUMS)

    // console.log({ error, loading, data})

    return {
        error,
        loading,
        data
    }
}