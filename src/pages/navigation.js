class Navigation{
    constructor(page)
    {
        this.page = page;
        this.btn_signIn = this.page.locator('//*[@id="__next"]/div/header/div/div[2]/div[1]/p');
    }
 
    
    async navigationLoginScreen()
    {
        await this.page.goto("https://friendify.ai/");
    }
    async accessLoginScreen(){ 
        this.btn_signIn.click();
    }

}
export default Navigation;