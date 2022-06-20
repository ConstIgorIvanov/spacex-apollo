import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
  query getMissions {
    missions {
      id
      name
      description
      website
      wikipedia
    }
  }
`;
