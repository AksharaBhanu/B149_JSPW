import {test,chromium} from "@playwright/test";

async function my_script2({page})
{
   
    await page.goto("http://www.fb.com");

    let title=await page.title();
    console.log(title);
   
}

//by default , playwright will open the browser, go to new page and at the end it auto closes the browser

test("My Test1",my_script2);
