import { test } from "@playwright/test"
import { ProductPage } from "../page-objects/ProductPage"
import { Navigation } from "../page-objects/Navigation"
import { Checkout} from "../page-objects/Checkout"


test.only('new user journey', async({ page }) =>{
    const productPage = new ProductPage(page)
    await productPage.visit()

    await productPage.addProductToBasket(0)
    await productPage.addProductToBasket(1)
    await productPage.addProductToBasket(2)

    const navigation = new Navigation(page)
    await navigation.goToCheckout()
    
    const checkout = new Checkout(page)
    await checkout.removeCheapestProduct()


})