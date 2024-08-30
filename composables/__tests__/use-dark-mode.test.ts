import { expect, test } from "vitest";
import { useDarkMode } from "../use-dark-mode";

test("use-dark-mode is exported and defined", () => {
  expect(useDarkMode).toBeDefined();
})
