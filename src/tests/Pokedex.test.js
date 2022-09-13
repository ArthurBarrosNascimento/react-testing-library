import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex.js', () => {
  const typeButtonPokemon = 'pokemon-type-button';

  it('Testando h2, com titulo Encountered pokémons', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const title = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2,
    });

    expect(title).toBeInTheDocument();
  });

  it('Testando btn de filtro da Pokedex', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const filterBtns = screen.getAllByTestId(typeButtonPokemon);
    userEvent.click(filterBtns[2]);
  });

  it('Testando se os btn de filtro tem os nomes corretos', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const typeFireBtn = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(typeFireBtn);

    const id = 'pokemon-type';

    expect(screen.getByTestId(id)).toHaveTextContent(typeFireBtn.textContent);
  });

  it('Testando se exibe o proximo pokemon ao ser clicado', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const nextBtn = screen.getByRole('button', { name: /Próximo pokémon/i });

    expect(nextBtn).toBeDefined();
  });

  it('Testando o btn do filtro é ativado', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const allbutton = screen.getByRole('button', { name: /All/i });
    expect(allbutton).toBeDefined();

    userEvent.click(allbutton);
  });
});
