import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import Temperature from '../components/temperature'

describe("Temperature", () => {
  
  let wrapper;
  
  beforeEach(() => {
     wrapper = shallow(<Temperature />);  
  });

  it("should render default temperature", () => {
    expect(wrapper.text()).toContain("20");
  });

  it("should render increased temperature",() => {
    wrapper.find("#increase").simulate("click");
    expect(wrapper.text()).toContain("21");
  });

  it("should render decreased temperature",() => {
    wrapper.find("#decrease").simulate("click");
    expect(wrapper.text()).toContain("19");
  });

  it("should render msg with minimum temperature",() => {
    wrapper = shallow(<Temperature temperature={10} />)
    wrapper.find("#decrease").simulate("click");
    expect(wrapper.text()).toContain("Cannot decrease 10 is the minimum temperature");
  });

  it("should have power saving mode checked by default",() => {
    let checkbox = wrapper.find("#powerSavingOn");
    expect(checkbox.props().checked).toEqual(true);  
  })

})
