// @flow
import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {} from './${NAME}';

describe('${NAME}', () => {
    test('', () => {
        expect(false).toEqual(true)
    });

    test('Render', () => {
         const wrapper = shallow(<div />);
         expect(wrapper).toMatchSnapshot();
    });

    test('Interaction', () => {
        const onClick = jest.fn();
        const wrapper = mount(<div onClick={onClick} />);
        wrapper.find('div').first().simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

// http://facebook.github.io/jest/docs/en/expect.html#tocontainitem