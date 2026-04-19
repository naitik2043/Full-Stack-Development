import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  theme: "light",
  user: { name: "Guest" },
  lang: "en",
};

const Appslice=createSlice({
    name:"app"

})