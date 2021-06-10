import { render, screen, fireEvent } from '@testing-library/react';
import CardProtecao from './index.jsx';

describe('CardProtecao', () => {
  it('Renderiza a página', () => {
    render(<CardProtecao />);
  });
});
