/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Counter from './components/pages/Counter';
import QtemuPage from './components/pages/Qtemu';
import StarWars from './components/pages/StarWars';

const App = () => (
  <>
    <QtemuPage />
    <hr />
    <Counter />
    <hr />
    <StarWars />
  </>
);

export default App;
