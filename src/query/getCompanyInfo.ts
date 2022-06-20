import { gql } from '@apollo/client';

export const GET_COMPANY_INFO = gql`
query getCapsules{
  {
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
}
`;
