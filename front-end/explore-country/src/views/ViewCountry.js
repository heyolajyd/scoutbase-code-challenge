import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import useCountryQuery from '../hooks/useCountryQuery';
import Chunk from '../components/Chunk';

const CountryItem = styled.div`
  padding: 20px;
  border: 1px solid #e8e8e8;
  width: ${props => props.width || '300px'};
  margin-bottom: 10px;

  &:hover {
    box-shadow: ${props =>
      props.hoverable ? '0 2px 8px rgba(0, 0, 0, 0.09)' : null};
  }
`;

const CountryItemContainer = styled.div`
  padding: 20px;
`;

const ViewCountry = props => {
  const {
    match: { params }
  } = props;
  const {
    loading,
    data: { country }
  } = useCountryQuery(params.code);

  const { name, currency, phone } = country || {};

  return (
    <Chunk loading={loading}>
      <CountryItemContainer>
        <CountryItem hoverable>
          <p>Name: {name}</p>
          <p>Currency: {currency}</p>
          <p>Area Code: {phone}</p>
        </CountryItem>
      </CountryItemContainer>
    </Chunk>
  );
};

export default withRouter(ViewCountry);
