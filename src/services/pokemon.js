import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms)); // eslint-disable-line
}
const baseQuery = fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' });

const query = async (args, api, extraOptions) => {
  await sleep(3000);
  const res = await baseQuery(args, api, extraOptions);
  return res;
};

export const pokemonApi = createApi({
  baseQuery: query,
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi;
