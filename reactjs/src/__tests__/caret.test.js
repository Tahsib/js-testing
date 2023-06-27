import { render, fireEvent } from '@testing-library/react';
import App from '../index.js';

describe('App', () => {
  it('should format phone number input correctly', () => {
    const { getByLabelText } = render(<App />);
    const phoneInput = getByLabelText('(123) 456-7890');

    fireEvent.change(phoneInput, { target: { value: '(123) 456-7890' } });
    expect(phoneInput.value).toBe('(123) 456-7890');
    expect(phoneInput.selectionStart).toBe(5);
  });
});