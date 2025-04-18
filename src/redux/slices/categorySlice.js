import { authSlice } from './authSlice';

export const categorySlice = authSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => '/categories',
    }),
    getProducts: builder.query({
      query: () => '/products',
    }),
    getBrands: builder.query({
      query: () => '/brands',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getProductByCategory: builder.query({
      query: (id) => `/products?category=${id}`,
    }),
  }),
  overrideExisting: true,
});

export const {useGetCategoryQuery, useGetProductsQuery, useGetBrandsQuery, useGetSingleProductQuery, useGetProductByCategoryQuery} = categorySlice;
