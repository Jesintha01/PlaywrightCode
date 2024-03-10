import { chromium, test } from "@playwright/test";
import { log } from "console";

test('Launch the browser' , async () => {

    const browser=await chromium.launch({headless:false,channel:"chrome"});
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    log(page.url());
    await page.locator(`#username`).fill('vidyar@testleaf.com');
    await page.fill(`#password`,'Testleaf@1234');
    await page.click('#Login');
    log(page.title());
    await page.waitForTimeout(5000);
})

