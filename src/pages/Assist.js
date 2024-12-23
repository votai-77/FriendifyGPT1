import Login from "./login";

class Assist extends Login {
  constructor(page) {
    super();
  }
  //    title_assist = this.page.locator('//*[@id="header"]/div[1]/div/a[5]/span');
  //     title_pdf = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[1]');
  //     title_audio = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[2]');
  //     title_image = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[3]');
  //     upload = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[2]/label/div');
  //     btn_start = this.page.locator('//*[@id="headlessui-dialog-:r9:"]/div/div[2]/div/div[2]/button');
  //     result_bot_PDF = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/p[1]');

  get title_assist() {
    return this.page.locator('//*[@id="header"]/div[1]/div/a[5]/span');
  }
  get title_pdf() {
    return this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[1]'
    );
  }
  get title_audio() {
    return this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[2]'
    );
  }
  get title_image() {
    return this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[3]'
    );
  }
  get upload() {
    return this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[2]/label/div'
    );
  }
  get btn_start() {
    return this.page.locator(
      '//*[@id="headlessui-dialog-:r9:"]/div/div[2]/div/div[2]/button'
    );
  }
  get result_bot_PDF() {
    return this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/p[1]'
    );
  }
  async clickAssist() {
    await title_assist.click();
  }
  async summaryPDF() {
    await this.upload.click();
    const chooseFile = await Promise.all([
      this.page.waitForEvent(1000),
      this.upload.click(),
    ]);
    await chooseFile.setInputFiles("C:Users\vyvysDownloadssummaryPDF (2).pdf");
    await this.btn_start.click();
    try {
      const resultPDF = await this.result_bot_PDF.innerText();
      console.log(resultPDF);
    } catch (e) {
      console.log("Error", e);
    }
  }
}
export default Assist;
