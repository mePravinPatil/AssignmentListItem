import {render} from '@testing-library/react';
import Icon from './Icon';

test('Icon contains correct value', () => {
  render(<Icon iconname=''/>)
  const testIcon = document.getElementById('icon');
  expect(testIcon).toBeInTheDocument();
});


test('Icon contains correct value in Props', () => {
    render(<Icon />)
    const testIcon = document.getElementById('test');
    expect(testIcon).toHaveClass('fa-solid fa-envelope');
  });

  
