import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';
import {isTSAnyKeyword} from '@babel/types';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('renders learn react link', () => {
  render(<App />);
  console.log(screen);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
