import {test} from "@playwright/test";

test("My Test1",async ({page})=>{
    await page.goto("http://www.fb.com");
    let title=await page.title();
    console.log(title);
});