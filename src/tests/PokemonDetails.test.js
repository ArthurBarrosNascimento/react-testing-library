import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails.js', () => {
  it('Testando informações detalhadas do Pokemon', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const detailsTitle = screen.getByRole('heading', { name: /details/i, level: 2 });
    expect(detailsTitle).toBeDefined();
  });

  it('Testando a seção de Sumario', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const summaryTitle = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(summaryTitle).toBeDefined();
  });

  it('Testando se o detalhe de um pokemon especifio é renderizado (Pikachu)', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const summaryText = screen.getByText(/roasts hard berries with electricity/i);
    expect(summaryText).toBeDefined();
  });

  it('Testando a seção de Mapas', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const summaryTitle = screen.getByRole('heading', {
      name: /Game Locations of Pikachu/i, level: 2,
    });

    expect(summaryTitle).toBeDefined();
  });

  it('Testando se o mapa corrreto é render de pokemon especifico (pikachu)', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const mapsImg = screen.getAllByRole('img', { name: /Pikachu Location/i });
    const map1Src = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const map2Src = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    expect(mapsImg[0].src).toBe(map1Src);
    expect(mapsImg[1].src).toBe(map2Src);
  });

  it('Testando a label do checkbox', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const favoriteLabel = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favoriteLabel).toBeDefined();
  });
});
