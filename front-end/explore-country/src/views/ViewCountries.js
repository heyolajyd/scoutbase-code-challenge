import React from 'react';
import styled from 'styled-components';
import useCountriesQuery from '../hooks/useCountriesQuery';
import Chunk from '../components/Chunk';
import Card from '../components/Card';

const ListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ViewCountries = () => {
  const { loading, data } = useCountriesQuery();
  const { countries = [] } = data || {};

  return (
    <Chunk loading={loading} data={countries}>
      <ListContainer>
        {countries.map(country => (
          <Card key={country.code} {...country} />
        ))}
      </ListContainer>
    </Chunk>
  );
};

export default ViewCountries;
