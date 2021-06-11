import { render, screen, fireEvent } from "@testing-library/react";
import CardCredito from "./index.jsx";

describe("CardCredito", () => {
  it("Renderiza a página", () => {
    render(<CardCredito />);
  });

  it("Aparece a informação na tela a respeito das ofertas de crédito encontradas", () => {
    render(<CardCredito />);
    expect(
      screen.getByText(/Encontramos uma oferta de cartão de crédito para você!/)
    ).toBeInTheDocument();
  });
});
