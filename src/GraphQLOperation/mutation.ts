import {gql} from '@apollo/client'

export const UPDATE_USER = gql`
    mutation updateUser($userData:userData!){
        user:updateUser(userData:$userData){
            _id
            firstName
            lastName
            email
        }
    }
`