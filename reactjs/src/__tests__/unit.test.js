import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should format phone number input correctly', () => {
    const { getByLabelText } = render(<App />);
    const phoneInput = getByLabelText('(123) 456-7890');
    
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    expect(phoneInput.value).toBe('(123) 456-7890');
    
    fireEvent.change(phoneInput, { target: { value: '1234567890123456' } });
    expect(phoneInput.value).toBe('(123) 456-7890');
    
    fireEvent.change(phoneInput, { target: { value: '123a456b7890' } });
    expect(phoneInput.value).toBe('(123) 456-7890');
    
    fireEvent.change(phoneInput, { target: { value: '1234567890abcd' } });
    expect(phoneInput.value).toBe('(123) 456-7890');
  });
});






