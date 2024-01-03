import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const BlogApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: (query) => ({
        url: `/api/posts`,
        params: {
          query: query

        }

      })
    }),

    getPostDetail: builder.query({
      query: (query) => ({
        url: `/api/posts/${query}`,

        method: 'GET'


      })
    }),

    getPostByCategory: builder.query({
      query: (category) => ({
        url: `/api/posts`,
        params: { cat: category },
      })
    }),


    createPost: builder.mutation({
      query: ({ title, desc, username }) => ({
        url: `/api/posts`,
        method: 'POST',
        body: { title, desc, username }
      })
    }),

    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: updatedPost
      })
    }),

    deletePost: builder.mutation({
      query: ({ username, id }) => ({
        url: `/posts/${id}`, method: 'DELETE',
        body: username
      })
    }),

  })
});


export const { useGetPostsQuery, useGetPostDetailQuery, useGetPostByCategoryQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = BlogApi