const { TIMEOUT } = require("dns");
const { config } = require("../config/config");
const { expect } = require("@playwright/test");

class GenerateImage {
  constructor(page) {
    this.page = page;
    this.icon_back = this.page.locator('//*[@id="Vector"]');

    this.create_new = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[4]/div/div/div[1]/div[2]/a/a/span'
    );
    //Standard
    this.typing = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/main/div[3]/div/div/div/form/div/textarea'
    );
    this.btn_send = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/main/div[3]/div/div/div/form/div/button'
    );
    this.result_standard = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/main/div[2]/div/div/div[2]/div[252]'
    );

    //Pro
    this.btn_generate_pro = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/main/div[3]/div/div/div/div/button[2]'
    );
    this.result_pro = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/main/div[2]/div/div/div[2]/div[234]'
    );

    //Toast
    this.toast = this.page.locator('//*[@id="__next"]/div[2]');
  }
  async generateStandard() {
    await this.icon_back.click();
    await this.create_new.click();
    await this.typing.fill(config.promptsStandard);
    await this.btn_send.click();
    // const result = this.result_standard.innerText();
    

  }
  async generatePro() {
    await this.icon_back.click();
    await this.create_new.click();
    await this.typing.fill(config.promptsStandard);
    await this.btn_generate_pro.click();
    await this.btn_send.click();
    // const resultPro = this.result_pro.innerText();
    const resultToast = await this.toast.innerText();
    await expect(resultToast).toHaveText(/Diamond is not enough/);
  }
}
export default GenerateImage;
