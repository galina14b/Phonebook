import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  
  
  
    // add: (state, {payload}) => {
    //   state.value.push(payload)
    // },
    // remove: (state, {payload}) => {
    //   return {
    //     value: state.value.filter((item) => item.id !== payload)
    //   }
    // },
  },
})

const contactReducer = contactsSlice.reducer;

export default contactReducer;