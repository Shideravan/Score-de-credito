import { render, screen, fireEvent } from "@testing-library/react";
import CardProtecaoRG from "./index.jsx";

describe("CardProtecao", () => {
  it("Renderiza a página", () => {
    render(<CardProtecaoRG />);
  });

  it("Aparece a frase especificada na tela", () => {
    render(<CardProtecaoRG />);
    expect(
      screen.getByText(
        /Seu score é alto, mas pessoas mal-intencionadas podem usar seus dados sem sua permissão./
      )
    ).toBeInTheDocument();
  });
});
