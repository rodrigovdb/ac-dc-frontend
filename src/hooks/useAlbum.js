import { useQuery, gql } from "@apollo/client"

export const LOAD_ALBUM = gql`
    query Album($id: ID)  {
        album(id: $id) {
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
export const useAlbum = (id) => {
    const { error, loading, data } = useQuery(LOAD_ALBUM, {
        variables: {
            id,
        }
    })

    // console.log({ error, loading, data})

    return {
        error,
        loading,
        data
    }
}