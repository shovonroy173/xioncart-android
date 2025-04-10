import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

export const apiBase = createApi({
  reducerPath: 'baseApi', // Clearer name
  baseQuery: fetchBaseQuery({baseUrl: 'https://xioncart.net/api/v1'}),
  endpoints: () => ({}),
});
