// Jest
import { getURL } from "../src/js/functions.js";

describe("=== Rooftop URL Challenge ===", () => {
    it("should return the URL", () => {
        expect(getURL()).toBe("https://docs.google.com/forms/d/e/1FAIpQLScpWkGfrPhqnDaqjSiewRCux257WsjxfHvz7y5qT8COTYFnyg/viewform");
    });
})