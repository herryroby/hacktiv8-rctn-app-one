/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.less';
import ErrorBoundary from './components/atoms/ErrorBoundary';
import Counter from './components/pages/Counter';
import QtemuPage from './components/pages/Qtemu';
import StarWars from './components/pages/StarWars';

const App = () => (
  <ErrorBoundary>
    <QtemuPage />
    <hr />
    <Counter />
    <hr />
    <StarWars />
  </ErrorBoundary>
);

export default App;
