import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
