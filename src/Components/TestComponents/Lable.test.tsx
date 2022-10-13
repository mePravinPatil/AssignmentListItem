import { render, screen, fireEvent } from '@testing-library/react';
import Label from '../Label';

describe('The Lable component', () => {
    test('Title contains correct value', () => {
        render(<Label title='List Item Title' subtitle='List Item Title subtitle' />)
        const testTitle = screen.getByText('List Item Title');
        expect(testTitle).toBeInTheDocument();
    })

    test('Subtitle contains correct value', () => {
        render(<Label title='List Item Title' subtitle='List Item Title subtitle' />)
        const testSubTitle = screen.getByText('List Item Title subtitle');
        expect(testSubTitle).toBeInTheDocument();
    })

    test("Title change event", () => {
        render(<Label title='List Item Title' subtitle='List Item Title subtitle' />);
        const changeBtn = screen.getByTestId("clickTitle");
        fireEvent.click(changeBtn);
        expect(changeBtn).toBeTruthy();
    });

    test("SubTitle change event", () => {
        render(<Label title='List Item Title' subtitle='List Item Title subtitle' />);
        const changeBtn = screen.getByTestId("clickSubTitle");
        fireEvent.click(changeBtn);
        expect(changeBtn).toBeTruthy();
    });
});
