import { test , expect } from "playwright/test";

test("Decatholaan", async ({page}) => {

     await page.goto("https://www.decathlon.in/");

    //verify the Home Page  

    await expect (page.getByRole("link", {name:"Decathlon Home"})).toBeVisible();
   //Verify the search input field is enabled
    await expect(page.locator("//input[@type='search']")).toBeEnabled();


    //search for the product
    await page.locator("//input[@type='search']").click();
    await page.locator("//input[@type='search']").fill("shoes");
    await page.locator("//input[@type='search']").press("Enter");


    await page.waitForTimeout(3000);

    //verify the title of the page
    const title = await page.title();
    console.log("Page title is : " + title);
    expect(title).toBe("Search | shoes");

    //selecting the Gender 
    await page.locator("[data-test-id='title:Gender']").click();
    await page.locator("[data-test-id='filter-checkbox-gender_id_en-MEN']").isChecked();

    //clicking the Category
    await page.locator("[data-test-id='title:Category']").click();
    await page.locator("[data-test-id='filter-item-nature_id_en-Football Boots']").isChecked();
    

    //selecting the size
    await page.locator("[data-test-id='title:Size']").click();
    await page.locator("[data-test-id='filter-item-indian_size-5']").isChecked();

    //Click on the Sort option
    await page.locator("//span[@class='text-sm font-medium text-rock-900']").click();
    await page.locator("[data-test-id='sort-option-dsi_pim_migration_price_asc']").click();


    await page.locator("//img[@data-test-id='product-card-product-image:img']").first().click();
    
    await page.locator("//button[@data-test-id='pdp-size-option-button-11']").click();

    await page.locator("//button[@data-test-id='pdp:add-to-cart-button']").click();

        const cartmsg = await page.locator("//h3[contains(text(),'Prod')]").innerText()
        console.log("Cart message is : " + cartmsg);
        expect(cartmsg).toBe("Product(s) added to cart");
        await page.waitForTimeout(3000);

        await page.locator("//button[@data-test-id='button']").click();

        const price = await page.locator("[data-test-id='cart:cart-checkout-total-cart-value']").innerText()
        console.log("The total price is", price)
    







       






});