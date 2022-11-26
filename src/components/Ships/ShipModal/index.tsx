import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addShip } from 'store/shipsSlice';

interface Props {
  isModal: boolean;
  closeModal: () => void;
}

// TODO: jeżeli atakujący i defujący mają różne statki to zrób dwa osobne modale do tego i przekazuj odpowiednią wartość do addShip({type: 'attacker' | 'defender'}). Jeżeli natomiast mają takie same to dodałbym wartość w modalSlice, poza wartością isOpened, dodaj shipeType: 'attacker' | 'defender' i modyfikuj ją w zależności czy user wciśnie buttona addship przy atakującym czy broniącym

const ShipModal = ({ isModal, closeModal }: Props) => {
  const dispatch = useDispatch();

  const handleAddShip = (shipName: string) => {
    dispatch(addShip({ shipName }));
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>OTWARTY ZIOMEK</h1>
        <ul>
          <li>
            <header>Statek1</header>
            <button onClick={() => handleAddShip('statek 1')}>
              Dodaj statek
            </button>
          </li>
          <li>
            <header>Statek2</header>
            <button onClick={() => handleAddShip('statek 2')}>
              Dodaj statek
            </button>
          </li>
        </ul>
        {/* Ostyluj to normalnie w pliku styles tak jak reszte plików. To jest tylko template na brudno */}
        <button onClick={closeModal} style={{ marginTop: 100 }}>
          ZAMKNIJ TYPA
        </button>
      </Modal>
    </div>
  );
};

export default ShipModal;
