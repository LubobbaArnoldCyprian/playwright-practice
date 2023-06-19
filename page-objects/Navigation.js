import { expect } from "@playwright/test";

export class Navigation{
    constructor(page){
        this.page = page

        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkOutLink = page.locator("(//a[normalize-space()='Checkout'])[2]")

        

    }

    getBasketCount = async () => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.innerText()
        return parseInt (text, 10)
        
    }

    goToCheckout = async() => {
        await this.checkOutLink.waitFor()
        await this.checkOutLink.click()
        await this.page.waitForURL('/basket')

    }
}