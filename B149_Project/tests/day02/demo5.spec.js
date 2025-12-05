import { test } from "@playwright/test";
test("test5", async ({ page }) => {
   await page.goto("https://aksharatraining.com/");
   await page.waitForTimeout(1000);//wait for 1s
   await page.setViewportSize({width:700,height:1000});
   await page.waitForTimeout(1000);
   console.log(await page.title());//akshara
   await page.waitForTimeout(1000);
   await page.close(); 
});