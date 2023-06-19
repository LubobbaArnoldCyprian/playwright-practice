import {expect, test} from "@playwright/test"

test("product page add to basket", async ({ page }) => {
    await page.goto("/")

    // const addToBasketButton = page.getByRole('button', {name: 'Add to Basket'}).first()
    const addToBasketButton = page.locator("(//button[@type='submit'])[1]").first()
    const basketCount = page.locator(".header-basket-count.bg-black.text-white.rounded-full.w-fit.px-2")
    

    await addToBasketButton.waitFor()
    await expect (addToBasketButton).toHaveText("Add to Basket")
    await expect (basketCount).toHaveText("0")

    await addToBasketButton.click()

    await expect(addToBasketButton).toHaveText("Remove from Basket")
    await expect(basketCount).toHaveCount(1)
    await expect(basketCount).toHaveText("1")

    const checkOut = page.locator("(//a[normalize-space()='Checkout'])[2]")
    await expect (checkOut).toHaveText("Checkout")
    await checkOut.click()
    await page.waitForURL("/basket")

    // chmod +x /Users/arnold/Desktop/playwright/shopping-store-mac-amd64

})


