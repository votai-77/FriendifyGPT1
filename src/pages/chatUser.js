import { config } from "../config/config";

class ChatUser {
  constructor(page) {
    this.page = page;
    this.title_Chat = this.page.locator(
      '//*[@id="header"]/div[1]/div/a[3]/span'
    );
    this.edt_search = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[3]/div/div/div[1]/input'
    );
    this.list_user = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[3]/div/div/div[2]/div/div/div'
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
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div/div[1]/div/div/div[2]/div[2]/div/div/div[14]/div/h3'
    );
  }
  async chatUser() {
    await this.title_Chat.click();
    await this.edt_search.fill(config.search_user);
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác
    await this.list_user.filter({ hasText: /^votai$/ }).click();
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác

    await this.des_user.fill(config.desUser);
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác

    await this.btn_send_user.click();
  }
  async chatBot() {
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác

    await this.icon_bot.click();
    await this.des_bot.fill(config.desBot);
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác

    await this.btn_send_bot.click();
    await this.result_bot.isVisible();
    await this.page.waitForTimeout(1000); // Chờ 1 giây hoặc sử dụng điều kiện chờ khác
    const resultBot = await this.result_bot.innerText();
    console.log(resultBot);
  }
}
export default ChatUser;
