import {test,chromium} from "@playwright/test";


let my_script2=async ({page})=>
{
   
    await page.goto("http://www.fb.com");

    let title=await page.title();
    console.log(title);
   
}

test("My Test1",my_script2);
