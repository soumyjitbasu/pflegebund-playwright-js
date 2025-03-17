import { test, expect } from "@playwright/test"

exports.PeopleNeed = class PeopleNeed {
    constructor(page){
        this.page = page
        this.h3Title = '//div[@class="form-steps"]//h3[contains(text()," Wie viele Personen")]'
        this.onePersonButton = '//button[@id="myself"]' 
        this.twoPersonButton = '//button[@id="relatives"]'
    }

    async gotoAddtionalPersonPagewithOnePerson(){
        const heading = await this.page.locator(this.h3Title)
        await expect(heading).toContainText('Wie viele Personen sind zu betreuen?')

        await this.page.locator(this.onePersonButton).click()
        await this.page.waitForTimeout(10000)
    }

    async gotoAddtionalPersonPagewithTwoPerson(){
        const heading = await this.page.locator(this.h3Title)
        await expect(heading).toContainText('Wie viele Personen sind zu betreuen?')

        await this.page.locator(this.twoPersonButton).click()
        await this.page.waitForTimeout(3000);
    }


}