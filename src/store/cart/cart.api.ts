import { CartItemType, QuantityChangeRequestType } from "../../types/cart";
import { baseApi } from "../baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<CartItemType[] | null, void>({
      query: () => "ShoppingCart/products",
      providesTags: ["CartProducts"],
    }),
    createRandomCart: build.mutation<any, number>({
      query: (value) => ({
        url: `/Admin/create?value=${value}`,
        method: "POST",
      }),
      invalidatesTags: ["CartProducts"],
    }),
    quantityInc: build.mutation<any, QuantityChangeRequestType>({
      query: (body) => ({
        url: "ShoppingCart/quantityinc",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CartProducts"],
    }),
    quantityDec: build.mutation<any, QuantityChangeRequestType>({
      query: (body) => ({
        url: "ShoppingCart/quantitydec",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CartProducts"],
    }),
    clearCart: build.mutation<any, void>({
      query: () => ({
        url: "/ShoppingCart/products",
        method: "DELETE",
      }),
      invalidatesTags: ["CartProducts"],
    }),
    removeItem: build.mutation<any, QuantityChangeRequestType>({
      query: (body) => ({
        url: "/ShoppingCart/product",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["CartProducts"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useQuantityIncMutation,
  useQuantityDecMutation,
  useCreateRandomCartMutation,
  useClearCartMutation,
  useRemoveItemMutation,
} = cartApi;
