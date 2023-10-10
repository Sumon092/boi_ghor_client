import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boighor-server-taupe.vercel.app/api/v1",
  }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});
// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
//   tagTypes: ["reviews"],
//   endpoints: () => ({}),
// });
