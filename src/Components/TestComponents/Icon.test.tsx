import {render, screen} from '@testing-library/react';
import Icon from '../Icon';

test('Icon contains correct value', () => {
    render(<Icon />)
    const testIcon = screen.getByTestId('icon');
    expect(testIcon).toBeVisible();
  });
