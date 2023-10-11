import React from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const modalStyles: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal" style={modalStyles}>
        <div className="modal-content bg-white p-6 rounded shadow-lg">
          <p className="text-center text-lg mb-4">
            Are you sure you want to delete this book?
          </p>
          <div className="flex justify-center">
            <button
              onClick={onConfirm}
              className="confirm-button bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="cancel-button bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
