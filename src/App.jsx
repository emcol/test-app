import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pokemonApi, useGetPokemonByNameQuery } from './services/pokemon';

function Barba() {
  const { data, error, isLoading, isFetching, isUninitialized, isSuccess, isError } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      {isError && error ? <div>Oh no, there was an error</div> : null}
      {isLoading ? <div>Loading...</div> : null}
      {isSuccess && data ? (
        <div>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}
      <br />
      <br />
      <p>isLoading: {String(isLoading)}</p>
      <p>isFetching: {String(isFetching)}</p>
      <p>isUninitialized: {String(isUninitialized)}</p>
      <p>isSuccess: {String(isSuccess)}</p>
      <p>isError: {String(isError)}</p>
      <br />
    </div>
  );
}

export default function App() {
  const [Hide, setHide] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {!Hide && <Barba />}
      <br />
      <br />
      <button onClick={() => dispatch(pokemonApi.util.resetApiState())} type="button">
        Reset
      </button>
      <br />
      <br />
      <button onClick={() => setHide(!Hide)} type="button">
        {!Hide && 'Hide'}
        {Hide && 'Show'}
      </button>
    </div>
  );
}
