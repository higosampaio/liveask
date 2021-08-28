import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { Button } from ".";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Button Component", () => {
  it("should be render", () => {
    render(<Button>Text</Button>);
    expect(screen.getByText("Text")).toBeTruthy();
  });
});
