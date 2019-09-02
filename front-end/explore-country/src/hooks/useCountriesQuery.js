import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const COUNTRIES_LIST_QUERY = gql`
  query {
    countries {
      name,
      code,
      native,
      continent {
        name
      }
      languages {
        name
        native
        rtl
      }
    }
  }
`;

export default () => useQuery(COUNTRIES_LIST_QUERY);