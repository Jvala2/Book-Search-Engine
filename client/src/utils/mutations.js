import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
    mutation createBook($bookData: BookInput!) {
        createBook(bookData: $bookData) {
            _id
            username
            email
            createdBooks {
                bookId
                authors
            }
        }

        }
    }`


export const ADD_USER = gql`

        }
    }
`; 