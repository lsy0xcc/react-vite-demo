import { configureStore } from '@reduxjs/toolkit';
import unreadReducer from './slicer/unreadSlicer';

const appStore = configureStore({
  reducer: {
    unread: unreadReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
