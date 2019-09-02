import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  padding: 20px;
  border: 1px solid #e8e8e8;
  width: ${props => props.width || '300px'};
  margin-bottom: 10px;

  &:hover {
    box-shadow: ${props =>
      props.hoverable ? '0 2px 8px rgba(0, 0, 0, 0.09)' : null};
  }
`;

const Language = styled.li`
  margin-bottom: 10px;
`;

const getLanguages = (languages = []) => {
  return languages.map(language => (
    <Language key={language.name}>
      <div>Name: {language.name}</div>
      <div>Native: {language.native}</div>
    </Language>
  ));
};

const Card = props => {
  const { name, code, continent, languages } = props;
  return (
    <Section width="250px" hoverable>
      <p>
        Name: <Link to={`/countries/${code}`}>{name}</Link>
      </p>
      <p>Continent: {continent.name}</p>
      <span>Languages</span>
      <ul>{getLanguages(languages)}</ul>
    </Section>
  );
};

export default Card;
