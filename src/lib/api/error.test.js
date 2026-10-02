import { describe, expect, it } from "vitest";
import { apiError } from "./error";

describe("API error helper", () => {
    it("returns the correct error response", async () => {
        const response = apiError("Invalid input", 400);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data).toEqual({
            success: false,
            message: "Invalid input",
        });
    });
});