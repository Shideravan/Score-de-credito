import { render, screen, fireEvent } from "@testing-library/react";
import getUsuario from "./usuario.js";

describe("MockUpAPI", () => {
  it("Recebe dados caso ok seja true", () => {
    ok = true;
    render(getUsuario);
  });

  it("Não recebe dados caso ok seja false", () => {
    ok = false;
    render(getUsuario);
  });
});
