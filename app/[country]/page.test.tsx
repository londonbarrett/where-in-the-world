import { render } from "@testing-library/react";
import App from "../app";
import Page from "./page";
import Providers from "../../components/providers";
import countries from "@/__mocks/countries";
import { ReactNode } from "react";

describe("App", () => {
  const renderPage = async (country: string) =>
    render(await Page({ params: { country } }), {
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
  global.fetch = jest.fn((url) => {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
          url === "https://restcountries.com/v3.1/all"
            ? countries
            : countries.filter((country) =>
                country.name.common.match(
                  new RegExp(
                    url.split("https://restcountries.com/v3.1/name/")[1],
                    "i"
                  )
                )
              )
        ),
    });
  }) as jest.Mock;
  it("Renders successfully", async () => {
    const { container } = await renderPage("peru");
    expect(container).toBeTruthy();
  });
  it("Displays Peru country info", async () => {
    const { getByText } = await renderPage("peru");
    expect(getByText(/piruw ripuwlika/i)).toBeInTheDocument();
    expect(getByText(/south america/i)).toBeInTheDocument();
    expect(getByText(/peruvian sol/i)).toBeInTheDocument();
    expect(getByText(/aymara, quechua, spanish/i)).toBeInTheDocument();
    expect(getByText(/republic of ecuador/i)).toBeInTheDocument();
    expect(getByText(/Federative Republic of Brazil/i)).toBeInTheDocument();
  });
});
