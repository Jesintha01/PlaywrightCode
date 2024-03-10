import { test } from "@playwright/test";

test("Learning to Upload a file", async ({page})=>{
    page.goto("https://the-internet.herokuapp.com/upload")
    await page.setInputFiles("input[type='file']","./Day_8/uploadFile.txt");

    // No type=file
    const fileToUpload=page.waitForEvent('filechooser');
    await page.locator("#drag-drop-upload").first().click();
    const file=await fileToUpload;
    await file.setFiles("./Day_8/uploadFile.txt");
    await page.waitForTimeout(3000);

})