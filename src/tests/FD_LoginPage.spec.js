import { chromium, test } from "@playwright/test";
import Login from "../pages/login";

let browser;
let page;
let login;
let navigation;
test.beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  login = new Login(page);
  navigation = new Navigation(page);
});
test.afterEach(async () => {
  await page.close();
});

test.describe("authen", async () => {
  test("Access by url friendify ai", async ({ page }) => {
    await test.step("access url", async () => {
      await navigation.navigation();
    });
  });
  // test("Login", async ({ page }) => {
  //   await test.step("Login with account registed!", async () => {
  //     await login.navigation();
  //     await login.loginapp();
  //   });
  // });
});
