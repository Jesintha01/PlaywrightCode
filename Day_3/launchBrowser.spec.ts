import { chromium, test } from "@playwright/test";

test('Launch the browser' , async () => {

    const browser=await chromium.launch({headless:false,channel:"chrome"});
    //create new window
    const browserContext=await browser.newContext();
    //create new tab
    const page=await browserContext.newPage();
    //launch the URL
    await page.goto("https://www.google.com");
    await page.goto("https://www.gmail.com");
    await page.waitForTimeout(5000);
})

// test is a function
// => is called arrow function
// browser - reference of a window
// broserContext - incognito window/ Isolated env
//page - tab