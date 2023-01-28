import { configureStore } from '@reduxjs/toolkit';
import myRedux from '../reduxFolder/myRedux';

export const myStore = configureStore({
  reducer: {
    localAction: myRedux,
  },
});