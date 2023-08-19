import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64df303771c3335b2582374d.mockapi.io/api/phonebook";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/addContact",
 
  async ({id, name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { id: id, name: name, number: number });
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact  = createAsyncThunk(
  "contacts/deleteContact",
  
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);