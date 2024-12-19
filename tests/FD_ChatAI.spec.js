import { test, expect, chromium } from "@playwright/test";
import Login from "../src/pages/login";
import Navigation from "../src/pages/navigation";
import ChatAI from "../src/pages/chatAI";

let browser;
let page;
let navi;
let login;
let chatai;

test.beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  navi = new Navigation(page);
  login = new Login(page);
  chatai = new ChatAI(page);
  
});
test.afterEach(async () => {
  await page.close();
  await browser.close();
});

test.describe("Chat AI with Bot", async () => {
  test("Chat Bot", async ({ page }) => {
    await test.step("access link Friendify and Login account", async () => {
      await navi.landingPageFriendify();
      await navi.accessLoginScreen();
      await login.loginapp();
    });
    await test.step("chat bot", async () => {
      await chatai.chatBot();
    });
  });
});
