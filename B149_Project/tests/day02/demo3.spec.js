import {test} from '@playwright/test';

test("test3",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("http://www.google.com")
    let title=await page.title();
    console.log(title);
});