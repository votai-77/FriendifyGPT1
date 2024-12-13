const { config } = require("../data/config");

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
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div'
    );
    this.icon_back = this.page.locator('//*[@id="__next"]/div[1]/div/div/div/main/div/div[1]/div/a');
  }
  async chatBot() {
    await this.edt_typing.fill(config.promptBot);
    await this.btn_icon_send.click();
    const result = await this.result_bot.innerText();
    console.log(result);
    await this.icon_back.click();
  }
}
module.exports = ChatAI;