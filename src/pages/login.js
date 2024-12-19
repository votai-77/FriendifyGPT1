import { config } from "../config/config";

class Login{
  constructor(page) {
    this.page = page;
    this.edt_email = this.page.locator('//*[@id="email"]');
    this.edt_password = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/div[2]/div/div/input'
    );
    this.btn_login = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/button'
    );
  }
  async loginapp() {
    await this.edt_email.fill(config.email);
    await this.edt_password.fill(config.password);
    await this.btn_login.click();
  }
}
export default Login;
