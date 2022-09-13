import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente Pokemon.js', () => {
  it('Testando se é renderizado infos sobre determinado Pokemon (Pikachu)', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const name = screen.getByTestId('pokemon-name');
    expect(name.textContent).toBe('Pikachu');

    const type = screen.getByTestId('pokemon-type');
    expect(type.textContent).toBe('Electric');

    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toBeDefined();

    const img = screen.getByRole('img', { name: /Pikachu sprite/i });
    const imgUrl = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(weight.textContent).toBe('Average weight: 6.0 kg');
    expect(img.src).toBe(imgUrl);
  });

  it('Testando o Mais informações funciona', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const link = screen.getByRole('link', { name: /more details/i });

    expect(link).toBeDefined();
    expect(link.href).toBe('http://localhost/pokemons/25');
  });

  it('Testando a favoritismo', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);

    const favCheckedBox = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favCheckedBox);

    const imgStarOfFIlter = screen.getByRole('img', {
      name: /Pikachu is marked as favorite/i,
    });

    const imgUrl = 'http://localhost/star-icon.svg';
    expect(imgStarOfFIlter.src).toBe(imgUrl);

    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);

    expect(imgStarOfFIlter.alt).toBe('Pikachu is marked as favorite');
  });
});
