import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ContactModal } from './';

describe('ContactModal', () => {
  afterEach(cleanup);
  test('Initializes empty form', () => {
    render(<ContactModal />);

    const nameInput = screen.queryByPlaceholderText('Name');
    const phoneInput = screen.queryByPlaceholderText('Phone Number');
    const emailInput = screen.queryByPlaceholderText('Email Address');
    const submitButton = screen.getByText('Submit');

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(nameInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');
    expect(emailInput).toHaveValue('');

    expect(submitButton).toBeDisabled();
  });

  test('Disables submit button until form is valid', () => {
    render(<ContactModal />);
    const nameInput = screen.queryByPlaceholderText('Name');
    const phoneInput = screen.queryByPlaceholderText('Phone Number');
    const emailInput = screen.queryByPlaceholderText('Email Address');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'Port Exe' } });
    fireEvent.change(phoneInput, { target: { value: '99679-6217' } });
    fireEvent.change(emailInput, { target: { value: 'port@exe.com' } });

    expect(submitButton).not.toBeDisabled();
  });
});
