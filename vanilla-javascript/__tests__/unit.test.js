import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body><input id="phone"></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('formatNumber', () => {
  it('should format phone number input correctly', () => {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.value = '1234567890';
    phoneInput.selectionStart = 0;
    
    const inputEvent = new Event('input', { bubbles: true });
    phoneInput.dispatchEvent(inputEvent);
    
    expect(phoneInput.value).toBe('(123) 456-7890');
    expect(phoneInput.selectionStart).toBe(1);
    
    phoneInput.value = '9876543210';
    phoneInput.selectionStart = 3;
    
    phoneInput.dispatchEvent(inputEvent);
    
    expect(phoneInput.value).toBe('(987) 654-3210');
    expect(phoneInput.selectionStart).toBe(4);
  });
});
