import { expect } from "@playwright/test"
import { Navigation } from "./Navigation.js"

export class ProductPage{
    constructor(page){
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
    }

    visit =  async () => {
        await this.page.goto("/")
        // await this.page.pause()
    }


    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)
        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText("Add to Basket")

        const navigation = new Navigation(this.page)

        const basketCountBeforeAdding = await navigation.getBasketCount()
        await specificAddButton.click()
        await expect(specificAddButton).toHaveText("Remove from Basket")
        const basketCountAfterAdding = await navigation.getBasketCount()
        expect (basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)

    }
}

