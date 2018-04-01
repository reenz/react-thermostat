import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
configure( { adapter: new Adapter() });
import Adapter from 'enzyme-adapter-react-16'
import App from '../App';

describe("Heading",() => {
  it("should render 'thermostat'", () => {
    const wrapper = shallow(<App />)   
    expect(wrapper.text()).toContain("Thermostat");
  })
})
