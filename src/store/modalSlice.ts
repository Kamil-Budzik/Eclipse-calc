import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpened: boolean;
  //  shipType: 'attacker' | 'defender'. Patch na todo w ShipModal/index.tsx
}

const initialState: ModalState = {
  isOpened: false,
  // shipType: null
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
