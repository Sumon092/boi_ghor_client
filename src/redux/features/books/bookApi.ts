import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ data, token }) => ({
        url: `/books/add-book`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ token, id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/add-review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => `/books/get-review/${id}`,
      providesTags: ["reviews"],
    }),

    addToWishList: builder.mutation({
      query: ({ token, id }) => ({
        url: `/books/wishList/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addToReading: builder.mutation({
      query: ({ token, id }) => ({
        url: `/books/reading/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getWishlists: builder.query({
      query: (token) => ({
        url: `/books/wishlists`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getReading: builder.query({
      query: (token) => ({
        url: `/books/reading`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
  useGetReviewQuery,
  useAddToWishListMutation,
  useAddToReadingMutation,
  useGetReadingQuery,
  useGetWishlistsQuery,
} = bookApi;
