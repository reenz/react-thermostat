import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import Temperature from '../components/temperature'

describe("Temperature",() => {
  it("should render default temperature", () => {
    const wrapper = shallow(<Temperature />)  
    expect(wrapper.text()).toEqual("20");
  })
})
