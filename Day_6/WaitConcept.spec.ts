import { test,chromium } from "@playwright/test";

test(`TC_002 Auto Waits`, async ({page}) => {
    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    buttonToClick.click();
});