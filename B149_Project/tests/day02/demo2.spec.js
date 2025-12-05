import {test} from '@playwright/test';

test("test2",async({context})=>{
    let page=await context.newPage();
    await page.goto("http://www.google.com")
    let title=await page.title();
    console.log(title);
});