import { test } from "@playwright/test";
test("test4", async ({ page }) => {
   await page.goto("https://aksharatraining.com/");
   console.log(await page.title());//akshara

   await page.goto("https://www.google.com/");
   console.log(await page.title());//google

   await page.goBack();
   console.log(await page.title());//akshara

   await page.goForward();
   console.log(await page.title());//google
   
   await page.reload();
    console.log(await page.title());//google

   await page.close();
});