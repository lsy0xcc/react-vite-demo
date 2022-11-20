import { createSlice } from '@reduxjs/toolkit';

interface UnreadState {
  value: number;
}
const initialState: UnreadState = {
  value: 0,
};
export const unreadSlice = createSlice({
  name: 'unread',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = unreadSlice.actions;
export default unreadSlice.reducer;
