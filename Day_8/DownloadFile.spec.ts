import { test } from "@playwright/test";

test("Learning to download a file", async ({page})=>{
    page.goto("https://the-internet.herokuapp.com/download");

    const fileToDownload = page.waitForEvent('download');
    await page.getByText("xpaths.png", { exact: true }).click();
    const filePath = await fileToDownload;
    await filePath.saveAs("Downloaded Files/" + (await fileToDownload).suggestedFilename());
    
})