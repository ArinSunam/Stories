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
      query: ({ title, desc }) => ({
        url: `/api/posts`,
        method: 'POST',
        body: { title, desc, username: "gfdfgbdfg" }
      })
    }),

    deletePost: builder.mutation({
      query: (query) => ({
        url: `/api/posts/${query}`,
        method: 'DELETE',
        body: 'username'
      })
    })

  })
});


export const { useGetPostsQuery, useGetPostDetailQuery, useGetPostByCategoryQuery, useCreatePostMutation } = BlogApi