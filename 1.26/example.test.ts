import { expect, test } from "@playwright/test";
import { gimmeAOne } from "./playwright-utils.js";

test("imports work", () => {
  expect(gimmeAOne()).toBe(1);
});
