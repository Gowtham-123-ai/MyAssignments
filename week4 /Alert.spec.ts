import test from "@playwright/test";

test("Page once Handle Alert", async ({page}) => {
    
        await page.goto("https://www.leafground.com/alert.xhtml");

        await page.locator("(//span[text() = 'Show'])[5]").click(); // auto dismiss alert
        await page.waitForTimeout(3000);
        page.once("dialog", async (alerttype) => {
            const type = alerttype.type();

            console.log("Alert type is : " + type);

            const message = alerttype.message();

            console.log("Alert message is : " + message);
            
            await alerttype.accept();

        
          })  

        await page.locator("(//span[text() = 'Show'])[1]").click();

        await page.locator("(//span[text() = 'Show'])[5]").click();


});


test("Page on Handle Alert", async ({page}) => {
    
        await page.goto("https://www.leafground.com/alert.xhtml");

        await page.locator("(//span[text() = 'Show'])[5]").click(); // auto dismiss alert
        await page.waitForTimeout(3000);
        page.on("dialog", async (alerttype) => {
            const type = alerttype.type();

            console.log("Alert type is : " + type);

            const message = alerttype.message();

            console.log("Alert message is : " + message);

    


if (type === "alert") {
    await alerttype.accept();
}else if (type === "confirm") {
    await alerttype.dismiss();
}else if (type === "prompt") {
    await alerttype.accept("GOWTHAM");
}
    
        });

        await page.locator("(//span[text() = 'Show'])[1]").click();

        await page.locator("(//span[text() = 'Show'])[2]").click();

});
