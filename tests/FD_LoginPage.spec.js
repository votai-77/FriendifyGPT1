import { chromium, test } from "@playwright/test";
import Login from "../src/pages/login";

let browser;
let page;
let login;
test.beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  login = new Login(page);
});
test.afterEach(async () => {
  await page.close();
});

test.describe("authen", async () => {
  test("Access by url friendify ai", async ({ page }) => {
    await test.step("access url", async () => {
      await login.navigationLoginScreen();
      await login.loginapp();
    });
  });
});
