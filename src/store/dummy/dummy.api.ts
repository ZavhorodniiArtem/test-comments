import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IDummy} from "../../models/models";

export const dummyApi = createApi({
    reducerPath: "dummy/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/",
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        getComments: build.query<IDummy, void>({
            query: () => ({
                url: "comments?limit=5",
            }),
        }),
    }),
})

export const { useGetCommentsQuery } = dummyApi
