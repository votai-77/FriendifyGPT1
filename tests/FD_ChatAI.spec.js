import { test, expect } from "@playwright/test";

let browser;
let page;
let login;
let chatai;

test.beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  
});
test.afterEach(async () => {
  await page.close();
  await browser.close();
});

test.describe("Chat AI with Bot", async () => {
  test("Chat Bot", async ({ page }) => {
    await test.step("Login account", async () => {
      await login.navigation();
      await login.loginapp();
    });
    await test.step("chat bot", async () => {
      await chatai.chatBot();
    });
  });
});
