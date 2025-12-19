export class secureAreaPage {

    successMessage = "#flash-messages"
    pageHeader= "#content"

    assertsuccessMessage(expectedMessage) {
        cy.get(this.successMessage).should('be.visible')
        .and('contain.text', expectedMessage)
    }

    assertPageHeader(expectedMessage) {
        cy.get(this.pageHeader).should('be.visible')
        .and('contain.text', expectedMessage)
    }
}