const { navigateTo } = require("../support/pageObjects/navigationPage")

describe('Tests with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('navigation across app', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
    })
})