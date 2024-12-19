import { config } from "../config/config";

class Navigation{
    constructor(page)
    {
        this.page = page;
        this.btn_signIn = this.page.locator('//*[@id="__next"]/div/header/div/div[2]/div[1]/p');
    }
 
    
    async landingPageFriendify()
    {
        await this.page.goto(config.url);
    }
    async accessLoginScreen(){ 
        await this.btn_signIn.click();
    }

}
export default Navigation;