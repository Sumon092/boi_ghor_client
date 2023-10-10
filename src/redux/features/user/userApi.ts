import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    signup: builder.mutation({
      query: ({ data }) => ({
        url: `/users/register`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    getAuthUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetAuthUserQuery } =
  userApi;
