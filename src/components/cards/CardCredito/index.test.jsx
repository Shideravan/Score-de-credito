import { render, screen, fireEvent } from '@testing-library/react';
import CardCredito from './index.jsx';

describe('CardCredito', () => {
  it('Renderiza a página', () => {
    render(<CardCredito />);
  });
});
