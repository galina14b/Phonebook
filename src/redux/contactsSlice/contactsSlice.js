import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, {payload}) => {
      state.value.push(payload)
    },
    remove: (state, {payload}) => {
      return {
        value: state.value.filter((item) => item.id !== payload)
      }
    },
  },
})

export const { add, remove } = contactsSlice.actions

export default contactsSlice.reducer