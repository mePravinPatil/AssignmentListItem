import { render, screen } from '@testing-library/react';
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

    // test('title event click', () => {
    //     render(<Label title='List Item Title' subtitle='List Item Title subtitle' />)
    //     const click = screen.getByTestId("clickTitle");
    //     expect(click).toBeInTheDocument();
    //     });
    });
