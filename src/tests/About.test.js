import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o component About.js', () => {
  it('Testando se a página contem um h2 About Pokédex ', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');

    const title = screen.getByRole('heading', { nome: /About Pokédex/i, level: 2 });

    expect(title).toBeDefined();
    expect(title).toHaveTextContent('About Pokédex');
  });

  it('Testa se a página contém a imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');

    const pokedexImage = screen.getByAltText('Pokédex');

    expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
