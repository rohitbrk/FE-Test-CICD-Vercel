import { add } from "../utils/add.js";
import { expect, test } from "@jest/globals";

test("adds 1 + 2 to equal 3", () => {
  expect(add(2, 2)).toBe(3);
});
