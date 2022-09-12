import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente NotFound', () => {
  it('Testando se é exibida na tela a mensagem Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    history.push('/notfound');
    const titulo = screen.getByRole('heading', { level: 2 });
    expect(titulo).toHaveTextContent('Page requested not found');
  });

  it('Testando se a imagem é exibida', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    history.push('/notfound');
    const titulo = screen.getByRole('heading', { level: 2 });
    expect(titulo).toHaveTextContent('Page requested not found');

    const pikachuImage = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );

    expect(pikachuImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
