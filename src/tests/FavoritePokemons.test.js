import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { readFavoritePokemonIds } from '../services/pokedexService';

describe('Testando o componente FavoritePokemons', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found;', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkFavoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavoritePokemon).toBeInTheDocument();
    userEvent.click(linkFavoritePokemon);
    expect(history.location.pathname).toBe('/favorites');

    const message = screen.getByText('No favorite pokemon found');

    expect(message).toBeInTheDocument();
  });

  it('Testando se são exibidos todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    expect(history.location.pathname).toBe('/pokemons/25');

    const checkFavoriteInput = screen.getByRole('checkbox');
    expect(checkFavoriteInput).toBeInTheDocument();
    userEvent.click(checkFavoriteInput);

    const linkFavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavoritePokemons).toBeInTheDocument();
    userEvent.click(linkFavoritePokemons);
    expect(history.location.pathname).toBe('/favorites');

    const listPokemonsFavorites = readFavoritePokemonIds();
    const pokemonFavoritechecked = screen.getAllByRole('link', { name: 'More details' });
    expect(listPokemonsFavorites.length).toEqual(pokemonFavoritechecked.length);
  });
});
