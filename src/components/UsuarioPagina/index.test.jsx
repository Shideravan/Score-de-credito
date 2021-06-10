import { render, screen, fireEvent } from "@testing-library/react";
import UsuarioPagina from "./index.jsx";

describe("UsuarioPagina", () => {
  it("Renderiza a página", () => {
    render(<UsuarioPagina />);
  });

  it("Aparece informações na tela"),
    () => {
      render(<App />);
      screen.getByText("Sua pontuação");
    };

  it("Renderiza corretamente o link saiba mais"),
    () => {
      render(<App />);
      screen.getByText("Saiba mais");
    };
});
