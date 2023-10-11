import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DeleteConfirmationModal.css';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className="modal flex justify-center items-center" style={modalStyles}>
      <div className="modal-content w-1/3 mx-auto mt-64">
        <p>Are you sure you want to delete this book?</p>
        <button onClick={onConfirm} className="confirm-button mt-10">
          Confirm
        </button>
        <button onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;

