import { render, screen, fireEvent } from '@testing-library/react';
import CardNegociar from './index.jsx';

describe('CardNegociar', () => {
  it('Renderiza a página', () => {
    render(<CardNegociar />);
  });
});
