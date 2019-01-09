import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import ContactForm from '../../components/Form/index';

describe('Contact form', () => {
  it('renders correctly', () => {
    const { container } = render(<ContactForm />);

    expect(container).toMatchSnapshot();
  });

  it('updates the different input fields', () => {
    const name = 'A-J Roos';
    const email = 'asjas@outlook.com';
    const message = 'This is a test message';

    const { getByLabelText } = render(<ContactForm />);
    const nameInput = getByLabelText('Enter your name:');
    const emailInput = getByLabelText('Enter your email:');
    const messageInput = getByLabelText('Enter a message:');

    nameInput.textContent = name;
    emailInput.textContent = email;
    messageInput.textContent = message;

    expect(nameInput).toHaveTextContent(name);
    expect(emailInput).toHaveTextContent(email);
    expect(messageInput).toHaveTextContent(message);
  });

  it('is disabled when the user submits the form', () => {
    const { getByText, getByTestId } = render(<ContactForm />);

    fireEvent.click(getByText('Submit'));
    const { disabled } = getByTestId('form-disabled');

    expect(disabled).toBe(true);
  });
});
