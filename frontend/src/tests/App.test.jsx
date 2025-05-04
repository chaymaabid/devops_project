import { render, screen } from "@testing-library/react";
import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";

// Optional: add Chakra theme if needed
// import theme from "../theme";
beforeAll(() => {
	globalThis.fetch = vi.fn(() =>
		Promise.resolve({
			json: () =>
				Promise.resolve({
					data: [
						{ id: 1, name: "Product 1" },
						{ id: 2, name: "Product 2" },
					],
				}),
		})
	);
});

afterAll(() => {
	globalThis.fetch.mockRestore?.();
});

test("renders App without crashing", () => {
	render(
		<MemoryRouter>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</MemoryRouter>
	);

	// You can change this to something unique in HomePage or Navbar
	expect(screen.getByText(/Current Products 🚀/)).toBeInTheDocument();
});
