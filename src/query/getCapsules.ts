import { gql } from '@apollo/client';

export const GET_CAPSULES = gql`
  query getCapsules {
    capsules {
      id
      status
      type
      dragon {
        id
        name
      }
    }
  }
`;
