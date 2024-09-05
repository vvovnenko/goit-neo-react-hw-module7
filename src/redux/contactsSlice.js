import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
  selectors: {
    selectContacts: (state) => state.items,
  },
});

export const { addContact, deleteContact } = slice.actions;

export const { selectContacts } = slice.selectors;

export default slice.reducer;
