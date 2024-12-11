const { config } = require("../data/config");

class Login{
    constructor(page)
    {
        this.page = page;
        this.btn_login_landing = this.page.locator('//*[@id="__next"]/div/header/div/div[2]/div[1]/p');
        this.edt_email = this.page.locator('//*[@id="email"]');
        this.edt_password = this.page.locator('//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/div[2]/div/div/input');
        this.btn_login = this.page.locator('//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/button');
    }

    async navigation(){
        await this.page.goto(config.url);
        await this.btn_login_landing.click();
    }
    async loginapp(){
        await this.edt_email.fill(config.email);
        await this.edt_password.fill(config.password);
        await this.btn_login.click();

    }
}
module.exports = Login;