import { authSlice } from './authSlice';

export const categorySlice = authSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => '/frontend/categories',
    }),
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: true,
});

export const {useGetCategoryQuery, useGetProductsQuery} = categorySlice;
