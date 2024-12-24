import { test, chromium } from "@playwright/test";
import Navigation from "../src/pages/navigation";
import Login from "../src/pages/login";
import ChatAI from "../src/pages/chatAI";
import GenerateImage from "../src/pages/generateImage";
import ChatUser from "../src/pages/chatUser";

let page;
let browser;
let access;
let login;
let generateText;
let generateImage;
let chatuser;
test.beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  access = new Navigation(page);
  login = new Login(page);
  generateText = new ChatAI(page);
  generateImage = new GenerateImage(page);
  chatuser = new ChatUser(page);
});
test.afterEach(async () => {
  await page.close();
  await browser.close();
});

test.describe(async () => {
  test("Access to Friedify page", async ({ page }) => {
    await test.step("access to page", async () => {
      await access.landingPageFriendify();
      await access.accessLoginScreen();
    });
    await test.step("login page", async () => {
      await login.loginapp();
    });
    await test.step("generate Text", async () => {
      generateText.chatBot();
    });
    await test.step("generate Image Standard", async () => {
      await generateImage.generateStandard();
    });
    await test.step("generate Image Pro", async () => {
      await generateImage.generatePro();
    });
    await test.step("chat user", async () => {
      await chatuser.chatUser();
    });
    await test.step("chat bot", async () => {
      await chatuser.chatBot();
    });
    await test.step("summary pdf", async () => {
      await chatuser.chatBot();
    });
  });
});
