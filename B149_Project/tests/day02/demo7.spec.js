import { test } from "@playwright/test";
test("test7", async ({ page }) => {

   await page.goto("https://aksharatraining.com/");
   await page.waitForTimeout(2000);

   await page.goto("https://www.google.com/");
   await page.waitForTimeout(2000);

   await page.goBack();
   await page.waitForTimeout(2000);

   await page.goForward();
   await page.waitForTimeout(2000);
   
   await page.reload();
   await page.waitForTimeout(2000);

   await page.close();
});