import { test, chromium } from "@playwright/test";
import Navigation from "../src/pages/navigation";
import Login from "../src/pages/login";
import Assist from "../src/pages/Assist";

let browser;
let page;
let navi;
let login;
let assist;

test.beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  navi = new Navigation(page);
  login = new Login(page);
  assist = new Assist(page);
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
    await test.step("Summary PDF", async () => {
      await assist.clickAssist();
      await assist.summaryPDF();
      await assist.summaryAudio();
      await assist.summaryImage();
    });
  });
});
