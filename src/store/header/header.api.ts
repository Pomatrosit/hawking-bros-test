import { HeaderType } from "../../types/header";
import { baseApi } from "../baseApi";

const headerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHeader: build.query<HeaderType, void>({
      query: () => "/ShoppingCart/header",
    }),
  }),
  overrideExisting: false,
});

export const { useGetHeaderQuery } = headerApi;
