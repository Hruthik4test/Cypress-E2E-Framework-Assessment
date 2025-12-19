export class loginPage {

    userName = "#username"
    password = "#password"
    loginButton = "button.radius"
    errorMessage = "#flash-messages"

    openInternetURL() {
        cy.visit(Cypress.env('URL'))
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

    assertErrorMessage(expectedMessage) {
        cy.get(this.errorMessage).should('be.visible')
        .and('contain.text', expectedMessage)
    }

}