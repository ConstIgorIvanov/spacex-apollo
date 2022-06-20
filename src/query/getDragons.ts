import { gql } from '@apollo/client';

export const GET_DRAGONS = gql`
  query getDragons {
    dragons {
      id
      name
      description
      active
      type
      wikipedia
    }
  }
`;
