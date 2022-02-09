import { render, screen, cleanup } from '@testing-library/react';
import { ContactModal } from './';

describe('ContactModal', () => {
  afterEach(cleanup);
  test('Initializes empty form', () => {
    render(<ContactModal />);

    const nameInput = screen.queryByPlaceholderText('Name');
    const phoneInput = screen.queryByPlaceholderText('Phone Number');
    const emailInput = screen.queryByPlaceholderText('Email Address');

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(nameInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
