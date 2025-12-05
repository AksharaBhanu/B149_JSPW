import { test } from "@playwright/test";
test("test8", async ({ page }) => {

   await page.goto("https://aksharatraining.com/");
   

   await page.goto("https://www.google.com/");


   await page.goBack();


   await page.goForward();

   
   await page.reload();


   await page.close();
});