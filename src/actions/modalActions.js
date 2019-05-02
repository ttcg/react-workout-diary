import { MODAL } from './actionTypes'

export const openModal = modalId => ({
    type: MODAL.OPEN,
    modalId
});

export const closeModal = modalId => ({
    type: MODAL.CLOSE,
    modalId
});