import { render, screen } from '@testing-library/react';
import Label from '../Label';

describe('The Lable component', () => {
  test('Title contains correct value', () => {
    render(<Label />)
    const testTitle = screen.getByText('List Item Title');
    expect(testTitle).toBeInTheDocument();
  })

  test('Subtitle contains correct value', () => {
    render(<Label />)
    const testSubTitle = screen.getByText('List Item Title subtitle');
    expect(testSubTitle).toBeInTheDocument();
  })
});