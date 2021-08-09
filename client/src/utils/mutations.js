import { gql } from '@apollo/client';


export const LOGIN_USER = gql``;


export const ADD_BOOK = gql`
    mutation createBook($bookData: BookInput!) {
        createBook(bookData: $bookData) {
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
    }
    `;

    export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
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
    }
    `;
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }    
    }

`; 