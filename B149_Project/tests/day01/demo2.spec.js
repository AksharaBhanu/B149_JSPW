import {chromium} from "@playwright/test"
import {test} from "@playwright/test"
async function my_script2()
{
    //open the browser
    let browser=await chromium.launch();
    //open new page
    let page= await browser.newPage();
    //go to fb.com
    await page.goto("http://www.fb.com");
    //print the title
    let title=await page.title();
    console.log(title);
    //close the page(tab)
    await page.close();
    //close the browser
    await browser.close();
}


test("My Test1",my_script2);

//cmd--> npx playwright test demo2.spec.js