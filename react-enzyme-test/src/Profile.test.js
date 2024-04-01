import React from "react";
import {render} from '@testing-library/react';
import Profile from './Profile';

 /**
  * 랜더링 테스트
  */

describe('<Profile/>', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="song" name="송경세"/>);
        expect(utils.container).toMatchSnapshot();
    })
    it('shows the props correctly', () => {
        const utils = render(<Profile username="song" name="송경세"/>);
        utils.getByText('song');
        utils.getByText('(송경세)');
        utils.getByText(/송/);
        
        //getByText: 컴포넌트에 해당 문자열이 존재하는지 검사.
    })
});