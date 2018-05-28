import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('shallows <App />', () => {
    it('should exist', () => {
        const wrapper = shallow(<App />)
        expect(shallow(<App />).exists()).toBe(true)
    })
})
