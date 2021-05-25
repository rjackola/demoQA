import { Builder, Capabilities,By,until, TouchSequence } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {selectorPage} from '../src/selectorPage'
import {BasePage} from '../src/basePage'
import { createImmediatelyInvokedFunctionExpression } from "typescript"

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new selectorPage (myDriver, 'https://www.demoqa.com/')

test('Opens Demo QA website', async () => {
    await myPage.navigate()
})
test('clicks element tab', async() => {
    await myPage.click(myPage.elementsTab)
    await myDriver.sleep(2000)
} )
test('click textbox tab', async() => {
    await myPage.click(myPage.textBox)
    await myDriver.sleep(2000)
})
test('enter information into text box', async()=> {
    await myPage.setInput(myPage.fullName, 'John Doe')
    await myPage.setInput(myPage.email, 'Jdoe@gmail.com')
    await myPage.setInput(myPage.currentAddress, '742 Evergreen Terrace')
    await myPage.setInput(myPage.permanentAddress, '742 Evergreen Terrace')
    await myPage.click(myPage.submitButton)
})
test('checkbox confirmation', async() => {
    await myPage.click(myPage.checkBox)
    await myPage.click(myPage.arrow1)
    await myPage.click(myPage.arrow2)
    await myPage.click(myPage.arrow3)
    await myPage.click(myPage.arrow6)
    await myPage.click(myPage.desktop)
    await myPage.click(myPage.documents)
    await myPage.click(myPage.downloads)
})

test('Widgets test 3 tabs', async() => {
    await myPage.click(myPage.widgetsTab)
    await myPage.click(myPage.accordion)
    await myPage.click(myPage.tab1)
    await myPage.click(myPage.tab2)
    await myPage.click,(myPage.tab3)
})


test('link test',async() =>{
    await myPage.click(myPage.elementExpander)
    await myPage.click(myPage.linksBox)
    await myPage.click(myPage.homeLink)
})

afterAll(async () => {
  await myDriver.quit();
});