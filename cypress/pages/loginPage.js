export class loginPage {

    userName = "#username"
    password = "#password"
    loginButton = "button.radius"
    logoutMessage = "#flash"
    errorMessage = "#flash-messages"


    openInternetURL() {
        cy.visit('/login')
    }

    enterUserName(herokuUserName) {
        cy.get(this.userName).type(herokuUserName)
    }

    enterPassword(herokuPassword) {
        cy.get(this.password).type(herokuPassword)
    }

    clickOnLogin() {
        cy.get(this.loginButton).click()
    }

    assertLogoutMessage(expectedMessage) {
        cy.get(this.logoutMessage).should('be.visible')
        .and('contain.text', expectedMessage)
    }

    assertErrorMessage(expectedMessage) {
        cy.get(this.errorMessage).should('be.visible')
        .and('contain.text', expectedMessage)
    }

}