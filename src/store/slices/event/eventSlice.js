import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
   name: 'event',
   initialState: {
       eventList: [],
       page: 0,
       eventModal: {
        active: false,
        event: {}
       }
   },
   reducers: {
      setEventList: (state, action) => {
          state.eventList = action.payload;
      },
      toggleModal: (state) => {
          state.eventModal.active = !state.eventModal.active;
      },
      setModalData: (state, action) => {
          state.eventModal.event = action.payload;
      },
      alterPage: (state, action) => {
          state.page = state.page + action.payload;
      },
      setPage: (state) => {
          state.page = 0;
      },
    }
});

export const { setEventList, toggleModal, setModalData, alterPage, setPage} = eventSlice.actions;