import loginPage from "../../../pages/loginPage";
import secureAreaPage from "../../../pages/secureAreaPage";
import testData from "../../../fixtures/testData.json";

const username = `user_${Date.now()}`
const password = `Pass@${Date.now()}`

describe ('Internet login flows', { tags: '@regression' }, () =>{
    
    it('Successful login to Internet and verify the message', { tags: '@smoke' }, () => {
        loginPage.openInternetURL()
        loginPage.enterUserName(Cypress.env('username'))
        loginPage.enterPassword(Cypress.env('password'))
        loginPage.clickOnLogin()

        secureAreaPage.assertsuccessMessage(testData.messages.expectedSuccessMessage)
        secureAreaPage.assertPageHeader(testData.header.pageHeader)
    })

    it('Successful login to Internet and logout and verify the message', () => {
        cy.login()
        secureAreaPage.clickOnLogoutButton()

        loginPage.assertLogoutMessage(testData.messages.expectedLogoutMessge)
    })

    it('Verify login fails with invalid credentials', { tags: '@smoke' }, () => {
        loginPage.openInternetURL()
        loginPage.enterUserName(username)
        loginPage.enterPassword(password)
        loginPage.clickOnLogin()
        loginPage.assertErrorMessage(testData.messages.expectedErrorMessage)
    })
})