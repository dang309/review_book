import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ReviewService from '../api/reviewAPI';

const INITIAL_STATE = {
  reviews: [],
  selectedReview: {},
  paging: {},
  status: '',
};

export const createReview = createAsyncThunk(
  'review/createReview',
  async (data, thunkAPI) => {
    const response = await ReviewService.createReview(data);
    return response;
  },
);

export const getReviewById = createAsyncThunk(
  'review/fetchReviewById',
  async (id) => {
    const response = await ReviewService.getReviewById(id);
    return response;
  },
);

export const getReviewByBookId = createAsyncThunk(
  'review/fetchReviewByBookId',
  async ({ book_id, page }) => {
    const response = await ReviewService.getReviewByBookId(book_id, page);
    return response;
  },
);

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews.unshift(action.payload.data);
      })
      .addCase(getReviewByBookId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewByBookId.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload.data;
        state.paging = action.payload.paging;
      })
      .addCase(getReviewById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedReview = action.payload.data;
      });
  },
});

export default reviewSlice.reducer;
