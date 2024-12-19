import { expect } from "@playwright/test";

const { config } = require("../config/config");

class ChatAI {
  constructor(page) {
    this.page = page;
    this.edt_typing = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[3]/div/div[1]/div/form/div/textarea'
    );
    this.btn_icon_send = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[3]/div/div[1]/div/form/div/button/div'
    );
    this.result_bot = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]'
    );
    this.icon_back = this.page.locator('//*[@id="__next"]/div[1]/div/div/div/main/div/div[1]/div/a');
    this.toast = this.page.locator('//*[@id="14"]/div[1]/div[2]/div');
  }
  async chatBot() {
    await this.edt_typing.fill(config.promptBot);
    await this.btn_icon_send.click();
    const resultBot = await this.result_bot.innerText();
    console.log(resultBot);
   
    // if(this.toast.isVisible())
    // {
    //   await expect(this.toast).toHaveText(/Diamond is not enough/)
    // }
    // else{
    //   console.log(resultBot);
    // }

    await this.icon_back.click();
  }
}
export default ChatAI;