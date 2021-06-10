import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Renderiza a página sem crashar", () => {
    render(<App />);
  });
});
