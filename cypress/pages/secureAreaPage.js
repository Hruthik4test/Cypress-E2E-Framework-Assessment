export class secureAreaPage {

    successMessage = "#flash-messages"
    pageHeader = "#content"
    logoutButton = "a.button.secondary.radius"

    clickOnLogoutButton() {
        cy.get(this.logoutButton).click()
    }

    assertsuccessMessage(expectedMessage) {
        cy.get(this.successMessage).should('be.visible')
        .and('contain.text', expectedMessage)
    }

    assertPageHeader(expectedMessage) {
        cy.get(this.pageHeader).should('be.visible')
        .and('contain.text', expectedMessage)
    }
}