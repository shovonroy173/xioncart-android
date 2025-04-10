import { authSlice } from './authSlice';

export const categorySlice = authSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => '/frontend/categories',
    }),
  }),
  overrideExisting: true,
});

export const {useGetCategoryQuery} = categorySlice;
