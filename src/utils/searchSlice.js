import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {

  } ,
  
  reducers: {
    cacheResults: (state, action) => {
                          //  Target     Source
        state = Object.assign(state, action.payload);
        // state[action.payload.query] = action.payload.results;
        
    },
  },
})


export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;
