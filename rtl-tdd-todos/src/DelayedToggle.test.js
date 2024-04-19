import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
    render,
    fireEvent,
    // waitFor,
    // waitForElement,
    waitForElementToBeRemoved,
    waitFor
} from '@testing-library/react';

/**
 * @waitFor :wait, waitForElement 등은 테스팅 라이브러리가 업데이트 되면서 waitFor로 통합됨. 기본시간 1000ms
 * @getByText : 텍스트로 요소를 찾음, 요소 없으면 오류 발생
 * @queryByText : 텍스트로 요소를 찾음, 요소 없어도 null 반환
 * @waitForElementToBeRemoved : 특정 요소가 사라질 때까지 기다림. 기본시간 1000ms
 */


describe('<DelayedToggle/>', () => {
    it('reveals text when toggle is ON' , async () => {
        const { getByText } = render(<DelayedToggle/>);
        const toggleButton = getByText("토글");
        fireEvent.click(toggleButton);
        await waitFor(() => getByText("야호!!"),{ timeout: 1600 });
        // {timeout으로 시간을 설정함. 이거 빼면 무조건..에러 발생함..ㅠ}
    })

    it('toggles text ON/OFF', async () => {
        const { getByText } = render(<DelayedToggle/>);
        const toggleButton = getByText("토글");
        fireEvent.click(toggleButton);
        const text = await waitFor(()=>getByText("ON"),{timeout : 1600});
        expect(text).toHaveTextContent("ON");
    })

    it('changes something when button is clicked', async () => {
        const { getByText, queryByText } = render(<DelayedToggle/>);
        const toggleButton = getByText('토글');
        fireEvent.click(toggleButton);
        const mutation = await waitFor(()=> expect(getByText("토글")).toHaveTextContent("토글"));
        console.log(mutation);
    })

    it('removes text when toggle is OFF', async () => {
        const {getByText} = render(<DelayedToggle/>);
        const toggleButton = getByText("토글");
        fireEvent.click(toggleButton);
        await waitForElementToBeRemoved(()=>getByText("OFF"),{timeout : 1500});
        fireEvent.click(toggleButton);
        await waitForElementToBeRemoved(()=>getByText("야호!!"), {timeout : 1500})

    })
})