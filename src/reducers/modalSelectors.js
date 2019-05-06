import { createSelector } from 'reselect'

const isModalOpen = (state, id) => state.modal[id]

export const getModalOpenById = createSelector(
	isModalOpen,
	(isOpen) => isOpen
);