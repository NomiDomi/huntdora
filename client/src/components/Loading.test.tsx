import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loading } from './Loading';
import { Typography } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should show text', () => {
    const wrapper = shallow(<Loading />);
    const text = wrapper.find(Typography);
    expect(text.text()).toBe("Getting Jobs...");
  })

  test('it should render the component', () => {
    render(
      <Loading />
    );

    const app = screen.getByTestId('Loading');
    expect(app).toBeInTheDocument(); 
  })
});