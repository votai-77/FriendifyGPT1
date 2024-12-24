import exp from "constants";
import Login from "./login";
import { expect } from "@playwright/test";

class Assist {
  constructor(page) {
    this.page = page;
    this.title_assist = this.page.locator('//*[@id="header"]/div[1]/div/a[5]');
    this.title_pdf = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[1]'
    );
    this.title_audio = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[2]'
    );
    this.title_image = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[1]/div[3]'
    );
    this.upload = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[3]/div/div/div[2]/label/div'
    );
    this.btn_start = this.page.locator(
      '//*[@id="headlessui-dialog-:r9:"]/div/div[2]/div/div[2]/button'
    );
    this.result_bot_PDF = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/p[1]'
    );
    this.result_bot_audio = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/p'
    );
    this.result_bot_image = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/p'
      
    );
    this.pre_view_pdf = this.page.locator(
      '//*[@id="headlessui-dialog-:r9:"]/div/div[2]/div'
    );
    this.pre_view_audio = this.page.locator(
      '//*[@id="headlessui-dialog-:ri:"]/div/div[2]/div'
    );
    this.summaryIMG = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div/div[2]/div[1]/button/img');
    this.letStartImg = this.page.locator('//*[@id="__next"]/div[1]/div/div/div[4]/main/div/div/div/button[2]');
  }
  async clickAssist() {
    await this.title_assist.click();
  }
  async summaryPDF() {
    try {
      await this.upload.setInputFiles(
        "C:/Users/vyvys/Downloads/summaryPDF.pdf"
      );
      await expect(this.pre_view_pdf).toBeVisible({ timeout: 2000 });

      await this.btn_start.click();
      const resultPDF = await this.result_bot_PDF.innerText();
      console.log(resultPDF);
    } catch (e) {
      console.log("Error", e);
    }
  }
  async summaryAudio() {
    try {
      await this.title_audio.click();
      await this.upload.setInputFiles("C:/Users/vyvys/Downloads/Test.mp3");

      await expect(this.pre_view_audio).toBeVisible({ timeout: 2000 });
      await this.page.waitTimeot;
      await this.btn_start.click();
      const resultAudio = await this.result_bot_audio.innerText();
      console.log(resultAudio);
    } catch (e) {
      console.log("Error", e);
    }
  }
  async summaryImage(){
    try{
      await this.title_image.click();
      await this.upload.setInputFiles("C:/Users/vyvys/Downloads/summaryIMG.jpg");
      await this.summaryIMG.click();
      await this.letStartImg.click();
      const result_Image = await this.result_bot_image.innerText();
      console.log(result_Image);
    }catch(e)
    {
      console.log("Error", e);
    }
  }
}
export default Assist;
