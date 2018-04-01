import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import App from '../App';


describe("Heading",() => {
  it("should render 'thermostat'", () => {
    const wrapper = shallow(<App />)   
    expect(wrapper.text()).toContain("Thermostat");
  })
})
