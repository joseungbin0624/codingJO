import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal Component', () => {
  it('displays children content when open', () => {
    const contentText = "I'm the content of the Modal!";
    render(<Modal isOpen={true}><p>{contentText}</p></Modal>);

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('does not display content when closed', () => {
    const contentText = "You shouldn't see me.";
    render(<Modal isOpen={false}><p>{contentText}</p></Modal>);

    expect(screen.queryByText(contentText)).toBeNull();
  });

  it('calls onClose when clicking the overlay', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}><p>Modal Content</p></Modal>);

    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
