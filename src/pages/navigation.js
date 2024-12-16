class Navigation{
    constructor(page)
    {
        this.page = page;
        
    }
    
    async navigationLoginScreen()
    {
        await this.page.goto("https://friendify.ai/");
    }

}