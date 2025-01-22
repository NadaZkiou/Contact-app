import { createSlice } from "@reduxjs/toolkit";
import user from '../assets/user.jpg';

export const initialState = {
  contacts: [
    {  
      id: '1',
      fname: 'John',  
      lname: 'Doe',    
      email: 'john@example.com',
      phone: '1200303133',
      photo: user
    },
    {
      id: '2',
      fname: 'Mary',  
      lname: 'Jane',    
      email: 'Mary@gmail.com',
      phone: '1200303134',
      photo: user
    },
    {
      id: '3',
      fname: 'Leila',  
      lname: 'Smith',    
      email: 'Smith@gmail.com' ,
      phone: '1200303135',
      photo: user
    }
  ]
}

export const contactReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
    },
    updateContact: (state, action) => {
      const updatedContact = action.payload
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id)
      if (index !== -1) {
        state.contacts[index] = updatedContact
      }
    }
  }
})

export const { addContact, deleteContact, updateContact } = contactReducer.actions;
export default contactReducer.reducer
