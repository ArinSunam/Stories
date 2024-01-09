import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const BlogApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['post'],
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: (query) => ({
        url: `/api/posts`,
      }),
      providesTags: ['post']
    }),

    getPostDetail: builder.query({
      query: (query) => ({
        url: `/api/posts/${query}`,

        method: 'GET'


      }),
      providesTags: ['post']
    }),




    createPost: builder.mutation({
      query: (query) => ({
        url: `/api/posts`,
        method: 'POST',
        body: query
      }),
      invalidatesTags: ['post']
    }),

    updatePost: builder.mutation({
      query: ({ id, body }) => {

        return {
          url: `api/posts/${id}`,
          method: 'PATCH',
          body: body,
        }
      },
      invalidatesTags: ['post']
    }),

    deletePost: builder.mutation({
      query: ({ username, id }) => ({
        url: `/api/posts/${id}`,
        method: 'DELETE',
        body: { username }
      }),
      invalidatesTags: ['post']
    }),

  })
});


export const { useGetPostsQuery, useGetPostDetailQuery, useGetPostByCategoryQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = BlogApi