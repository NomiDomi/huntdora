import React from 'react';
import { MemoryRouter } from 'react-router';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Welcome } from './components/Welcome';

describe('App', () => {
  test('it should render the App', () => {
    render(
      <App />
    )

    const app = screen.getByTestId('App');
    expect(app).toBeInTheDocument();
  })
})