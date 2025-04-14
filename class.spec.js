import{test, expect} from '@playwright/test'

test("assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect (page.locator("//input[@id='name']")).toBeEditable()
})

test("radiobutton",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='male']").check()
    
})

test("checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='sunday']").check()
    await expect (page.locator("//input[@id='sunday']")).toBeChecked()
    
})


test("multipleselect",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const locator = [
        "//input[@id='sunday']",
        "//input[@id='wednesday']",
        "//input[@id='friday']",
        
    ]

    for(const select of locator){
        await page.locator(select).check()
    }

    for (const uncheck of locator){
        if(await expect(page.locator(uncheck)).toBeChecked()){
            await page.locator(uncheck).uncheck()
            await expect(page.locator(uncheck)).not.toBeChecked()

        
    }}
})
    
    

