import { render, screen } from "@testing-library/react";
import MultipleElements from "./MultipleElements";

test("Testing Multiple Same Elements", () => {
  render(<MultipleElements />);
  const btn = screen.getAllByRole("button");
  const opt = screen.getAllByRole("option");

  expect(btn[1]).toBeInTheDocument();
  expect(opt[1]).toBeInTheDocument();
});

test("Testing Multiple Same Elements", () => {
  render(<MultipleElements />);
  const btn = screen.getAllByRole("button");
  const opt = screen.getAllByRole("option");

  for (let x = 0; x < btn.length; x++) {
    expect(btn[x]).toBeInTheDocument();
  }
  for (let y = 0; y < btn.length; y++) {
    expect(opt[y]).toBeInTheDocument();
  }
});
