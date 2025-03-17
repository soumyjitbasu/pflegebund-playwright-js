exports.HomePage = class HomePage {

    constructor(page){
        this.page = page
        this.compareProvidersNowButton = '//section[@id="c_hero"]//a[@class="c_btn c_btn__primary"]'
    }

    async gotoHomePage(){
        await this.page.goto('https://pflegebund.wwwclient.pl/')
    }

    async gotoPeoplePage(){
        await this.page.locator(this.compareProvidersNowButton).click()
    }
}