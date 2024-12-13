import { chromium, test } from "@playwright/test";
import Login from "../page/login";
import GenerateImage from "../page/generateImage";

let browser;
let page;
let login;
let generateStand;
test.beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  login = new Login(page);
  generateStand = new GenerateImage(page);
});
test.afterEach(async () => {
  await page.close();
});

test.describe("Generate Image", async () => {
  test("Generate image standard", async ({ page }) => {
    await test.step("Generate image standard with account not enough point", async () => {
      await login.navigation();
      await login.loginapp();
      // await generateStand.generateStandard();
      await generateStand.generatePro();
    });
  });
});
