import { useQuery, gql } from "@apollo/client"

import '../../interfaces/album.interface';

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
                name
            }
        }
    }
`
export const useAlbums = () => {

    const { data, loading, error } = useQuery(LOAD_ALBUMS);

    return data?.albums;
    /*
    const { error, loading, data } = useQuery(LOAD_ALBUMS)

    // console.log({ error, loading, data})

    if(loading){
        //return <Loading />
        return <div>LOADING</div>
    }
    if(error){
        return <div>something went wrong</div>
    }
    if(data){
        console.log(data);

        return data.albums;
    }
    */
}