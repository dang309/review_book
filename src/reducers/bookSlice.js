import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookService from '../api/bookAPI';

const INITIAL_STATE = {
  books: [],
  selectedBook: {},
  searchBooks: [],
  paging: {},
  status: '',
};

export const getBookForPerPage = createAsyncThunk(
  'book/fetchBookForPerPage',
  async ({ page, sortBy }) => {
    const response = await BookService.getBookForPerPage(page, sortBy);
    return response;
  },
);

export const getBookById = createAsyncThunk(
  'book/fetchBookById',
  async (id) => {
    const response = await BookService.getBookById(id);
    return response;
  },
);

export const getBookByKeyword = createAsyncThunk(
  'book/fetchBookByKeyword',
  async (keyword) => {
    const response = await BookService.getBookByKeyword(keyword);
    return response;
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: INITIAL_STATE,
  reducers: {
    cleanResult: (state, action) => {
      state.searchBooks = [];
    },

    activeLoading: (state) => {
      state.status = 'loading';
    },

    stopLoading: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookForPerPage.pending, (state) => {})
      .addCase(getBookForPerPage.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload.data;
        state.paging = action.payload.paging;
      })
      .addCase(getBookById.pending, (state) => {})
      .addCase(getBookById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedBook = action.payload.data;
      })
      .addCase(getBookByKeyword.pending, (state) => {})
      .addCase(getBookByKeyword.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchBooks = action.payload.data;
      });
  },
});

const { cleanResult, activeLoading, stopLoading } = bookSlice.actions;

export { cleanResult, activeLoading, stopLoading };
export default bookSlice.reducer;
