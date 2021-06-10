import { render, screen, fireEvent } from '@testing-library/react';
import UsuarioPagina from './index.jsx';

describe('UsuarioPagina', () => {
  it('Renderiza a página', () => {
    render(<UsuarioPagina />);
  });
});
