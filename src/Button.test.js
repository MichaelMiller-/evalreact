import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render a button', () => {
   const { container, getByText } = render(<Button value="Example" />)
   expect(getByText('Example')).toBeInTheDocument()
   // expect(container.firstChild).toMatchInlineSnapshot(`<button className="Button"`)
});
