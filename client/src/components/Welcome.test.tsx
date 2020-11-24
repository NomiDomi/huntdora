import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Welcome } from './Welcome';
import { Fade } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<Welcome />', () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should show text', () => {
    const wrapper = shallow(<Welcome />);
    const text = wrapper.find(Fade);
    expect(text.text()).toBe("Huntdora");
  })
});