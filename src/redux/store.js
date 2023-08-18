import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import contactReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']

};

const rootReducer = combineReducers({ 
  contacts: contactReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);

