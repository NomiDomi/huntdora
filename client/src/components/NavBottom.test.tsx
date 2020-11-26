import React from 'react';
import { NavBottom } from './NavBottom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<NavBottom />', () => {
  test('it should render the component', () => {
    render(
      <NavBottom />
    );

    const app = screen.getByTestId('NavBottom');
    expect(app).toBeInTheDocument(); 
  })
}) 