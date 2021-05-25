import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class selectorPage extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    //Selectors text box test
    elementsTab: By = By.xpath('(//div[@class="card mt-4 top-card"])[1]')
    textBox: By = By.id('item-0')
    fullName: By = By.id('userName')
    email: By = By.id('userEmail')
    currentAddress: By = By.id('currentAddress')
    permanentAddress: By = By.id('permanentAddress')
    submitButton: By = By.id('submit')

    //Selectors for check box test
    checkBox: By = By.id('item-1')
    arrow1: By = By.xpath('(//button[@aria-label="Toggle"])[1]')
    arrow2: By = By.xpath('(//button[@aria-label="Toggle"])[2]')
    arrow3: By = By.xpath('(//button[@aria-label="Toggle"])[3]')
    arrow6: By = By.xpath('(//button[@aria-label="Toggle"])[6]')
    desktop: By = By.xpath('(//span[text()="Desktop"])')
    documents: By = By.xpath('(//span[text()="Documents"])')
    downloads: By = By.xpath('(//span[text()="Downloads"])')


    //Selectors for link test
    elementExpander: By = By.xpath('(//*[text()="Elements"])')
    linksBox: By = By.id('item-5')
    homeLink: By = By.id('simpleLink')

    //Selectors for widgets test
    widgetsTab: By = By.xpath('//*[text()="Widgets"]')
    accordion: By = By.xpath('(//span[text()="Accordian"])')
    tab1: By = By.id('section1Heading')
    tab2: By = By.id('section2Heading')
    tab3: By = By.id('section3Heading')
}