import { render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./app";
import Page from "./page";
import Providers from "../components/providers";
import countries from "@/__mocks/countries";
import { ReactNode } from "react";

describe("App", () => {
  const renderPage = async () =>
    render(await Page(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <Providers>
          <App>{children}</App>
        </Providers>
      ),
    });
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(countries),
    })
  ) as jest.Mock;
  it("Renders successfully", async () => {
    const { container } = await renderPage();
    expect(container).toBeTruthy();
  });
  it("Toggles dark mode", async () => {
    const { baseElement, getAllByLabelText } = await renderPage();
    expect(baseElement.parentElement?.getAttribute("style")).toBe(
      "color-scheme: dark;"
    );
    const toggle = getAllByLabelText(/light/i)[0];
    await user.click(toggle);
    expect(baseElement.parentElement?.getAttribute("style")).toBe(
      "color-scheme: light;"
    );
  });
  it("Filters by region filter", async () => {
    const { getAllByText, getByText, queryByText } = await renderPage();
    const filter = getByText(/filter by region/i);
    await user.click(filter);
    const africa = getAllByText(/africa/i)[0];
    expect(africa).toBeTruthy();
    await user.click(africa);
    expect(queryByText(/cameroon/i)).toBeInTheDocument();
    expect(queryByText(/italy/i)).not.toBeInTheDocument();
  });
  it("Filters by query input", async () => {
    const { getByPlaceholderText, queryByText } = await renderPage();
    const input = getByPlaceholderText(/search for a country ../i);
    await user.type(input, "ger");
    expect(queryByText(/germany/i)).toBeInTheDocument();
    expect(queryByText(/italy/i)).not.toBeInTheDocument();
  });
  it("Filters by region filter and query input", async () => {
    const { getAllByText, getByPlaceholderText, getByText, queryByText } =
      await renderPage();
    const filter = getByText(/filter by region/i);
    await user.click(filter);
    const africa = getAllByText(/africa/i)[0];
    expect(africa).toBeTruthy();
    await user.click(africa);
    const input = getByPlaceholderText(/search for a country ../i);
    await user.type(input, "and");
    waitFor(() => {
      expect(queryByText(/rwanda/i)).toBeInTheDocument();
      expect(queryByText(/nigeria/i)).not.toBeInTheDocument();
    });
  });
});
