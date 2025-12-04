import { test } from "@playwright/test";
test("test1", async ({ page }) => {
   await page.goto("https://aksharatraining.com/");
});