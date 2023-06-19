import { test } from "@playwright/test"
import { myAccountPage } from "../page-objects/MyAccount"
import { getLoginToken } from "../api-calls/getLoginToken"
import { adminDetails } from "../data/adminDetails"


test(" My account using cookie injection ", async ({ page }) =>{
    // Make a request to get login token
    const loginToken =  await getLoginToken(adminDetails.username, adminDetails.password)
    console.warn({loginToken})

    // inject the login token into the browser
    const myAccount = new myAccountPage(page)
    await myAccount.visit()

    await page.evaluate(([loginTokenInsideBrowserCode]) =>{
        document.cookie = "token=" + loginTokenInsideBrowserCode
    }, [loginToken])
    await myAccount.visit()
    await myAccount.waitForPageHeading()
})