import { describe, expect, it } from "vitest";
import { registerSchema } from "./auth.schema";

describe("Register validation", () => {
    it("accepts a valid password", () => {
        const result = registerSchema.safeParse({
            name: "Test User",
            email: "test@example.com",
            password: "Abc123",
        });

        expect(result.success).toBe(true);
    });

    it("rejects a password without uppercase letter", () => {
        const result = registerSchema.safeParse({
            name: "Test User",
            email: "test@example.com",
            password: "abc123",
        });

        expect(result.success).toBe(false);
    });

    it("rejects a password without digit", () => {
        const result = registerSchema.safeParse({
            name: "Test User",
            email: "test@example.com",
            password: "Abcdef",
        });

        expect(result.success).toBe(false);
    });
});