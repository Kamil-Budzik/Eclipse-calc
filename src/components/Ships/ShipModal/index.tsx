import Modal from 'react-modal';

interface Props {
  isModal: boolean;
  closeModal: () => void;
}

const ShipModal = ({ isModal, closeModal }: Props) => {
  return (
    <div>
      <Modal
        isOpen={isModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>OTWARTY ZIOMEK</h1>
        <button onClick={closeModal}>ZAMKNIJ TYPA</button>
      </Modal>
    </div>
  );
};

export default ShipModal;
