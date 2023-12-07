import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createClient } from 'pexels';
const client = createClient(
  'afLCn5DXiUEWNMo8ZujuOw6vtrV1h6VtwG3tAAlZjGNy7FC5QdFdUrs1'
);
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async inputSearch => {
    try {
      const photos = await client.photos.search({
        query: inputSearch,
        per_page: 200,
      });
      return photos;
    } catch (err) {
      throw err;
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const dataAction = dataSlice.actions;
export default dataSlice.reducer;
