import { loginPage } from "../../pages/loginPage";
import { secureAreaPage } from "../../pages/secureAreaPage";
import testData from "../../fixtures/testData.json";

const loginPageElements = new loginPage();
const secureAreaPageEts = new secureAreaPage();
const username = `user_${Date.now()}`
const password = `Pass@${Date.now()}`

describe ('Internet login flows',() =>{
    
    it('Successful login to Internet',() => {
        loginPageElements.openInternetURL()
        loginPageElements.enterUserName(Cypress.env('username'))
        loginPageElements.enterPassword(Cypress.env('password'))
        loginPageElements.clickOnLogin()

        secureAreaPageEts.assertsuccessMessage(testData.messages.expectedSuccessMessage)
        secureAreaPageEts.assertPageHeader(testData.header.pageHeader)
    })

    it('Successful login to Internet with custom command', () => {
        cy.login()
    })

    it('Verify login fails with invalid credentials', () => {
        loginPageElements.openInternetURL()
        loginPageElements.enterUserName(username)
        loginPageElements.enterPassword(password)
        loginPageElements.clickOnLogin()
        loginPageElements.assertErrorMessage(testData.messages.expectedErrorMessage)
    })
})