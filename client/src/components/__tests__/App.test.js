/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App.jsx';

test('should render App component', () => {
  render(<App/>);
  const appElement = screen.getByTestId('AppProvider-1');
  expect(appElement).toBeTruthy();
})

// test('should render App component', () => {
//   expect(true).toBe(true);
// })