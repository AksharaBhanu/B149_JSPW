import {chromium} from "@playwright/test"

async function mytest(){
    let browser=await chromium.launch();//headless mode -- we cant see the browser
    let page=await browser.newPage();
    await page.goto("http://www.google.com");
    console.log(await page.title());
}

mytest();