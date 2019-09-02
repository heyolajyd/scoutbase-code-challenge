import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewCountries from './views/ViewCountries';
import ViewCountry from './views/ViewCountry';
import Navbar from './components/Navbar';
import GlobalStyle from './theme/globalStyle';

function Index() {
  return <h2>Welcome to explore country</h2>;
}

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Index} />
          <Route path="/countries" exact component={ViewCountries} />
          <Route path="/countries/:code" component={ViewCountry} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
