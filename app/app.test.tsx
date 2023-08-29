import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./app";
import Layout from "./layout";
import Page from "./page";
import Providers from "./providers";

describe("App", () => {
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
  it("Renders successfully", () => {
    const { container } = render(
      <Providers>
        <App>
          <Page />
        </App>
      </Providers>
    );
    expect(container).toBeTruthy();
  });
  it("Toggles dark mode", async () => {
    const { baseElement, getAllByText } = render(
      <Providers>
        <App>
          <Page />
        </App>
      </Providers>
    );
    expect(baseElement.parentElement?.getAttribute("style")).toBe(
      "color-scheme: dark;"
    );
    const toggle = getAllByText(/light/i)[1];
    await user.click(toggle);
    expect(baseElement.parentElement?.getAttribute("style")).toBe(
      "color-scheme: light;"
    );
  });
});
