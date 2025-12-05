import { test } from "@playwright/test";
//in playwright config file uncomment only 'Mobile Chrome' project
test("test1", async ({ page }) => {
   await page.goto("https://aksharatraining.com/");
   await page.waitForTimeout(6000);//wait for 3s
   await page.close();
});