import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import UsuarioPagina from "./index.jsx";

describe("UsuarioPagina", () => {
  it("Renderiza a página", () => {
    render(<UsuarioPagina />);
  });

  it("Aparece informações na tela", () => {
    render(<UsuarioPagina />);
    expect(screen.getByText(/Sua pontuação/)).toBeInTheDocument();
  });

  it("Renderiza corretamente o link saiba mais", () => {
    render(<UsuarioPagina />);
    expect(screen.getByText(/Saiba mais/i)).toBeInTheDocument();
  });
});
