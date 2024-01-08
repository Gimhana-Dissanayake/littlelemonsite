import { render, screen } from "@testing-library/react";
import Testimonials from "./components/Testimonials";

test("Renders the Testimonials heading", () => {
  render(<Testimonials />);
  const headingElement = screen.getByTestId("testimonials-header");
  expect(headingElement).toHaveTextContent("Testimonials");
});
