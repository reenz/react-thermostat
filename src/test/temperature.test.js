import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import Temperature from '../components/temperature'

describe("Temperature",() => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<Temperature />)  
  })
  it("should render default temperature", () => {
    expect(wrapper.text()).toContain("20");
  })

  it("should render increased temperature",() => {
    wrapper.find("#increase").simulate("click");
    expect(wrapper.text()).toContain("21");

  })
})
