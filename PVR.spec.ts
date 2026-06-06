import { test , expect } from "playwright/test";

test("booking ticket", async ({page}) => {
       await page.goto("https://www.pvrcinemas.com/");
       
       //select the city

       await page.locator("//h6[text()='Chennai']").click();
       
       await page.locator("(//div[@class='p-hidden-accessible p-dropdown-hidden-select']/following::span)[1]").click();
        await page.waitForTimeout(3000);
        await page.locator("//h6[text()='Bengaluru']").click();
        await page.waitForTimeout(3000);


         //select the cinema
         await page.locator("//span[text()='Cinema']").click();
        
        
         await page.locator("//span[text()='Select Cinema']").click();
         await page.locator("//span[contains(text(),'Magrath Road Bengaluru')]").click();

         //select the Date 
            await page.locator("//span[text()='Tomorrow']").click();
            //select the movie 
            //await page.locator("//span[@class='p-dropdown-label p-inputtext p-placeholder']").first().click()

            await page.locator("//span[text()='PARIMALA AND CO']").last().click();
            //select the show time
            await page.locator("//span[text()='01:05 PM']").click();

            //click on book now
            await page.locator("//button[@type = 'submit']").click();

            await page.locator("//button[text()= 'Accept']").click();


            await page.waitForTimeout(3000);
            await page.locator("//span[@id='CR.CLASSIC ROWS|J:13']").click();
            await page.waitForTimeout(3000);
            await page.locator("//span[@id='CR.CLASSIC ROWS|J:14']").click();


            //validating the movie
            const movietitle = await page.locator("h5").textContent();
            console.log("Movie name is : " + movietitle);
            expect(movietitle).toBe("PARIMALA AND CO");

            //validating the total amount
            const amount = await page.locator("//div[@class = 'grand-prices']").innerText();
            console.log("Total amount is : " + amount);
            expect(amount).toBe(" 703.84");


            //validating the selected seats
            const seatnumber = await page.locator("//div[@class = 'select-seat-number']").innerText();
            console.log("Selected seat number is : " + seatnumber);
            expect(seatnumber).toContain("J13");
            expect(seatnumber).toContain("J14");

             const pageTitle = await page.title();
                console.log("Page title is : " + pageTitle);
                expect(pageTitle).toBe("PVR Cinemas");



         
           



});