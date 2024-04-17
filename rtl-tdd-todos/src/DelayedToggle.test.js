import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
    render,
    fireEvent,
    // waitFor,
    waitForElement,
    // waitForDomChange,
    // waitForElementToBeRemoved
    waitFor
} from '@testing-library/react';

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
})