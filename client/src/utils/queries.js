import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
    query getAllMatchups {
        getAllMatchups {
            _id
            tech1
            tech2
            tech1_votes
            tech2_votes
        }
    }
`;
/*
export const QUERY_MATCHUP = gql`
    queary getMatchup{matchID: Int} {
        getMatchup{matchID: $matchID}  {
            _id
            tech1
            tech2
            tech1_votes
            tech2_votes
        }
    }`
*/
export const QUERY_USER = gql`   
    query getAllUser {
        getAllUser {
            name
        }
    }
`; 