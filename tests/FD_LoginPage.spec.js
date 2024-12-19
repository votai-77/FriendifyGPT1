import { chromium, test } from "@playwright/test";
import Login from "../src/pages/login";
import Navigation from "../src/pages/navigation";

let browser;
let page;
let login;
let navi;

test.beforeEach(async () => {
  // browser = await chromium.launch();
  page = await page.newContext();
  navi = new Navigation(page);
  login = new Login(page);
});
test.afterEach(async () => {
  await page.close();
});

test.describe("authen", async () => {
  //Test case login với account registed! => Pass
  test("Access by url friendify ai", async ({ page }) => {
    await test.step("access url", async () => {
      await navi.landingPageFriendify();
      await navi.accessLoginScreen();
    });
    await test.step("Login with account registed", async () => {
      await login.loginapp();
    });
  });
});
