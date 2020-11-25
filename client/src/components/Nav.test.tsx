import React from 'react';
import { Nav } from './Nav';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockAddQuery = jest.fn();
const mockQuery = 'dev';
const mockLocationName = 'Ldn';
const mockDistanceFrom = '';
const mockMinimumSalary = '';

describe('Nav', () => {
  test('it should render the component', () => {
    render(
      <Nav addQuery={mockAddQuery}/>
    );

    const app = screen.getByTestId('NavTop');
    expect(app).toBeInTheDocument(); 
  })
}) 