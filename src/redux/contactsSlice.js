import { createSlice } from '@reduxjs/toolkit';

const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
		// return [...state, action.payload]
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = myContactsSlice.reducer;
export const { add, remove } = myContactsSlice.actions;
