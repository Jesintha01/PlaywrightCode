import { expect, test } from "@playwright/test";

test("Learining to handle Alerts" , async ({page})=>{
    page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    
    page.once('dialog',async alertType=>{
        await alertType.accept();
    })
    const frameele=page.frameLocator("#iframeResult");
    await frameele.locator("//button[contains(text(),'Try it')]").click();
    expect(frameele.locator("//button[contains(text(),'Try it')]").innerText()).toContain("Pressed");
    await page.waitForTimeout(3000);

    
})
