import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EmptyList } from './EmptyList';
import { Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<EmptyList />', () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should show text', () => {
    const wrapper = shallow(<EmptyList />);
    const text = wrapper.find(Typography);
    expect(text.text()).toBe("No Jobs Here!");
  })

  test('it should render the component', () => {
    render(
      <EmptyList />
    );

    const app = screen.getByTestId('EmptyList');
    expect(app).toBeInTheDocument(); 
  })
});