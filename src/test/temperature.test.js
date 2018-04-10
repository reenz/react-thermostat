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

  it("should have power saving mode value as 'On' ",() => {
    let checkbox = wrapper.find("#powerSavingOn");
    expect(checkbox.props().value).toEqual("On");  
  })

  it("should render msg when user tries to increase temperature > 25 in power save mode",() => {
    wrapper = shallow(<Temperature temperature={25} />)
    wrapper.find("#increase").simulate("click");
    expect(wrapper.text()).toContain("This is maximum temperature you can set when power save mode is on.");
  })

  it("should render msg when user tries to increase temperature > 25 in power save mode",() => {
    wrapper = shallow(<Temperature temperature={32} />)
    wrapper.find("#powerSavingOn").simulate("change");
    wrapper.find("#increase").simulate("click");
    expect(wrapper.text()).toContain("This is the maximum temperature you can set.");
  })

  it("should reset to 20 on clicking reset",() => {
    wrapper.find("#reset").simulate("click");
    expect(wrapper.text()).toContain("20");
  })

it("should tell the energy usage as low for temperature less than 18",() => {
  wrapper = shallow(<Temperature temperature={15}/>)
  wrapper.find("#energyUsage").simulate("click");
  expect(wrapper.text()).toContain("Low Usage");
})

it("should tell the energy usage as medium for temperature less than 25",() => {
  wrapper = shallow(<Temperature temperature={24}/>)
  wrapper.find("#energyUsage").simulate("click");
  expect(wrapper.text()).toContain("Medium Usage");
})
})
