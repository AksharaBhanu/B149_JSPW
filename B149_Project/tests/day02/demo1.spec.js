import {test} from '@playwright/test';

test("test1",async({page})=>{
    await page.goto("http://www.google.com")
    let title=await page.title();
    console.log(title);
});