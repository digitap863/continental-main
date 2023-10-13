import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl=import.meta.env.MODE==='development'?"http://localhost:8080/api":"/api"
const baseUrl=import.meta.env.MODE==='development'?"http://localhost:8080/api":"/api"

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set("credentials", "include");
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["botResponse", "digitalOffice","streams",'courses'],
  endpoints: (builder) => ({
    botInteraction: builder.mutation({
      query: (data) => ({
        url: "/bot-interaction",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["botResponse"],
    }),
    digitalOffice: builder.query({
      query: () => "/digital-office",
      providesTags: ["digitalOffice"],
    }),
    digitalOfficeSubmit:builder.mutation({
      query:(data) => ({
        url:"/digital-office-submit",
        method:"POST",
        body:data
      })
    }),
    streams: builder.query({
      query: (country) => (country ? `/streams-fetch/${country}` : '/streams-fetch/null'),
      providesTags: ["streams"],
      invalidatesTags:['courses']
    }),
    courses: builder.query({
      query: (stream) => (stream!=='-' ? `/courses-fetch/${stream}` : '/courses-fetch/null'),
      providesTags: ["courses"],
      
    }),
   })
});

export const { useBotInteractionMutation,useDigitalOfficeQuery,useDigitalOfficeSubmitMutation,useStreamsQuery,useCoursesQuery } = apiSlice;
