import { render, screen } from '@testing-library/react';
import Radio from './Radio';

test('render a radiobutton', () => {
   const { getByLabelText } = render(<Radio id="id" value="option1" name="Button Text" />)
   expect(getByLabelText('option1')).toBeInTheDocument()
});
