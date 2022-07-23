import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Loading {
    Loading: boolean;
  
};
const initialState:Loading = {
    Loading: true,
};

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    getLoading:(state, action) => {
      state.Loading =action.payload;
    },
   
    
  },
  
});

export const {getLoading } = LoadingSlice.actions;


export default LoadingSlice.reducer;