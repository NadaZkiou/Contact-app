import { configureStore } from "@reduxjs/toolkit";
import  contactReducer  from "./contactSlice";
export default function store(){
    return configureStore({
        reducer: {
            contacts: contactReducer,
        }
    })
}