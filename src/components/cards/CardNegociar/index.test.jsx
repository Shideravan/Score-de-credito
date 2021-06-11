import { render, screen, fireEvent } from "@testing-library/react";
import CardNegociar from "./index.jsx";

describe("CardNegociar", () => {
  it("Renderiza a página", () => {
    render(<CardNegociar />);
  });

  it("Aparece o texto que demonstra que serão listadas as pendências na tela", () => {
    render(<CardNegociar />);
    expect(
      screen.getByText(/Você possui uma pendência com:/)
    ).toBeInTheDocument();
  });
});
