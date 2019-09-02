import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const COUNTRY_QUERY = gql`
  query ($code: String) {
    country (code: $code) {
      name
      phone
      currency
    }
  }
`;

export default (code) => useQuery(COUNTRY_QUERY, { variables: { code } });
