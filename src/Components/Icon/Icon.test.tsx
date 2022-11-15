import {render} from '@testing-library/react';
import Icon from './Icon';

test('Icon contains correct value', () => {
    render(<Icon iconname=''/>)
    const testIcon = document.getElementById('icon');
    expect(testIcon).toBeInTheDocument();
  });
