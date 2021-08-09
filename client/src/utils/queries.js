import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql` {
    query getAllUser {
            _id
           username
           email
           createdBooks {
               bookId
               authors
               image
               description
               title
               link
           }
        }
    }
`;
