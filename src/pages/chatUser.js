import { config } from "../data/config";

class ChatUser {
  constructor(page) {
    this.page = page;
    this.title_Chat = this.page.locator(
      '//*[@id="header"]/div[1]/div/a[3]/span'
    );
    this.edt_search = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[3]/div/div/div[1]/input'
    );
    this.des_user = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[2]/div/div[2]/form/div/textarea'
    );
    this.btn_send_user = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[2]/div/div[2]/form/div/div/button'
    );

    //bot
    this.icon_bot = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[2]/div/div[3]/div'
    );
    this.des_bot = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[2]/div/div[3]/div[2]/form/div/textarea'
    );
    this.btn_send_bot = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[2]/div/div[3]/div[2]/form/div/div/button'
    );
    this.result_bot = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[1]/div/div/div[2]/div[2]/div/div/div[18]/div/div[2]'
    );
  }
  async chatUser() {
    await this.title_Chat.click();
    await this.edt_search.filter({ hastext: /votai/ }).click();
    await this.des_user.fill(config.desUser);
    await this.btn_send_user.click();
    await page.waitForTimeout(3000);
  }
  async chatBot(){
    await this.icon_bot.click();
    await this.des_bot.fill(config.desBot);
    await this.btn_send_bot.click();
    await this.result_bot.innerText();
    

  }
}
