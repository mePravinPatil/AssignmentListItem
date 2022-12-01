import { render, screen } from "@testing-library/react";
import List from "./List";

describe("The List component", () => {
  test("alt contains correct value", () => {
    render(<List />);
    const testImage = screen.getByRole("img");
    expect(testImage).toHaveAttribute("alt", "list items photo");
  });

  test("src contains correct value", () => {
    render(<List />);
    const testImage = screen.getByRole("img");
    expect(testImage).toHaveAttribute("src", "Image.jpg");
  });

  test("List items contains correct value", () => {
    render(<List />);
    const testIcon = document.getElementById("parent-list");
    expect(testIcon).toBeInTheDocument();
  });
});
