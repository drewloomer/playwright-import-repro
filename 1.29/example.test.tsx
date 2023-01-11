import { expect, test } from '@playwright/experimental-ct-react';
import { gimmeAOne } from "./playwright-utils.js";

test("imports work", () => {
  expect(gimmeAOne()).toBe(1);
});
