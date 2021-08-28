import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CommentService from '../api/commentAPI';

const INITIAL_STATE = {
  comments: [],
  paging: {},
  status: '',
};

export const createComment = createAsyncThunk(
  'comment/createComment',
  async (data) => {
    const response = await CommentService.createComment(data);
    return response;
  },
);

export const getCommentByBookId = createAsyncThunk(
  'comment/fetchCommentByBookId',
  async (bookId) => {
    const response = await CommentService.getCommentByBookId(bookId);
    localStorage.setItem('comments', JSON.stringify(response.data));
    return response;
  },
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = 'idle';
        state.comments.unshift(action.payload.data);
      })
      .addCase(getCommentByBookId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCommentByBookId.fulfilled, (state, action) => {
        state.status = 'idle';
        state.comments = action.payload.data;
      });
  },
});

export default commentSlice.reducer;
