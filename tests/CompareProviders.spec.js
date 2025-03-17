import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import {PeopleNeed} from "../pages/PeopleNeedPage";

test('First Test', async ({ page })=>{

    const homePage = new HomePage(page)
    await homePage.gotoHomePage()
    await homePage.gotoPeoplePage()
    await page.waitForTimeout(5000)
    
    const peopleNeededPage = new PeopleNeed(page)
    await peopleNeededPage.gotoAddtionalPersonPagewithOnePerson()
    await page.waitForTimeout(5000)

    
    await page.close()
})