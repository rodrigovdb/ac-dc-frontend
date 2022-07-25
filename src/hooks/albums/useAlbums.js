import { useQuery, gql } from "@apollo/client"

const LOAD_ALBUMS = gql`
    query {
        albums {
            id
            name
            coverImage
            totalDuration
            year
            songs {
                id
                sort
                name
                duration
            }
        }
    }
`
export const useAlbums = () => {
    const { data, loading, error } = useQuery(LOAD_ALBUMS);

    return { data, loading, error };
}