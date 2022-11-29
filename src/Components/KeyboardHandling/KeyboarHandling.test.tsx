import { render, screen, fireEvent } from "@testing-library/react";
import KeyboardHandling from "./KeyboardHandling";

describe("The keyboard handling component", () => {
  test("Renders the Keyboard handling component", () => {
    render(<KeyboardHandling />);
  });

  test("Icon contains correct value in Props", () => {
    render(<KeyboardHandling />);
    const Screentext = document.getElementsByTagName("List");
    expect(Screentext).toBeInTheDocument();
  });
});
