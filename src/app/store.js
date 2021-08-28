import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../reducers/bookSlice';
import reviewReducer from '../reducers/reviewSlice';
import commentReducer from '../reducers/commentSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
    review: reviewReducer,
    comment: commentReducer,
  },
});
