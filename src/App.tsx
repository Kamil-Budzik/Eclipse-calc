import { useDispatch, useSelector } from 'react-redux';
import RouterProvider from 'router';
import { RootState } from 'store';
import GlobalStyle from 'styles/globalStyle';
import Modal from 'react-modal';
import ShipModal from 'components/Ships/ShipModal';
import { closeModal } from 'store/modalSlice';

Modal.setAppElement('#add-ship-modal');

function App() {
  const isModal = useSelector((state: RootState) => state.modal.isOpened);
  const dispatch = useDispatch();

  return (
    <>
      <ShipModal closeModal={() => dispatch(closeModal())} isModal={isModal} />
      <GlobalStyle />
      <RouterProvider />
    </>
  );
}

export default App;
