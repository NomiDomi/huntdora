import React from 'react';
import { MemoryRouter } from 'react-router';
import { App } from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  test('it should render the App', () => {
    render(
      <App />
    );
    const app = screen.getByTestId('App');
    expect(app).toBeInTheDocument();
  })
})

describe('NavBar', () => {
  test('it should render top nav bar', () => {
    render(
      <App />
    );
    const navBarTop = screen.getByTestId('NavTop');
    expect(navBarTop).toBeInTheDocument();
  })
  
  test('it should open search box when clicked on text input', () => {
    render(
      <App />
    );
    const navBarTop = screen.getByTestId('NavTop');
    const searchBox = screen.getByLabelText('SearchBox');
    expect(navBarTop).toBeInTheDocument();
    fireEvent.click(searchBox);
    expect(screen.getByText('Set Filters')).toBeInTheDocument();
  })
})

describe('NavbarBottom', () => {
  test('it should render bottom nav bar', () => {
    render(
      <App />
    );
    const navBarBot = screen.getByTestId('NavBottom');
    expect(navBarBot).toBeInTheDocument();
  })

  test('if there are no jobs saved, it should show empty page with "no jobs here!"', () => {
    render(
      <App />
    );
    const navBarBot = screen.getByTestId('NavBottom');
    const searchButton = screen.getByLabelText('Back to Search');
    expect(navBarBot).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(screen.getByText('No Jobs Here!')).toBeInTheDocument();
  })
})