import { test , expect } from  '@playwright/test'

test("service now", async({page}) =>{
        
    await page.goto("https://dev296651.service-now.com")
    await page.locator('#user_name').fill('admin')
    await page.locator('#user_password').fill('E7i*7wNgX*mM')
    await page.locator('#sysverb_login').click()
    await page.locator('[aria-label="All"]').click()

    await page.locator('#filter').fill('Service Catalog')
    await page.getByText("Service Catalog").nth(1).click()
    await page.frameLocator('#gsft_main').locator("//a[text()='Mobiles']").click()
    const frame = page.frameLocator("#gsft_main")
    await frame.locator("//a[@class='service_catalog']").first().click()

    await frame.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill('99')
    
    await frame.locator("[class='form-control cat_item_option']").selectOption({index: 2})
    await frame.locator("//label[text()='Sierra Blue']").click()
    await frame.locator("//label[text()='512 GB [add $300.00]']").click()
    await frame.locator("#oi_order_now_button").click()
    const confirmationmsg = frame.locator(".notification.notification-success")
    await expect(confirmationmsg).toBeVisible()
    const conMsg = await confsirmationmsg.textContent()
    expect(conMsg).toContain(confirmationmsg)
    await page.screenshot({
        path: 'Screenshots/FullPage.png',
        fullPage:true
    })
 
});

