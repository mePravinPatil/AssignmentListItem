import { render,screen } from '@testing-library/react';
import Image from './Image';

describe('The Image component', () => {
  test('alt contains correct value', () => {
    render(<Image src= 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">' alt='First Image'/>)
    const testImage = screen.getByRole("img");;
    expect(testImage).toHaveAttribute('alt','First Image');
  })

  test('src contains correct value', () => {
    render(<Image src= 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">' alt='First Image'/>)
    const testImage = screen.getByRole("img");
    expect(testImage).toHaveAttribute('src','https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">');
  })
});