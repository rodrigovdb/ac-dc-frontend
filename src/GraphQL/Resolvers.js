import { gql } from '@apollo/client'

export const LOAD_ALBUMS = gql`
    query {
        albums {
            id
            name
            coverImage
        }
    }
`