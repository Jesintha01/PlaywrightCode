import { chromium, test } from "@playwright/test";

test("Learning locators" , async () =>{
    //test.setTimeout(5000);
    const browser= await chromium.launch({headless:false});
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("demoSalesManager");
    await page.locator('#password').fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.waitForTimeout(5000);
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    await page.locator("#createLeadForm_firstName").fill("Jesintha");
    await page.locator("#createLeadForm_lastName").fill("Dass");
    await page.locator(".smallSubmit").click();
    console.log("Page Title:" + await page.title());
    await page.waitForTimeout(5000);

})