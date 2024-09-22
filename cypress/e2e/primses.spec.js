describe('Cypress', function () {
    
    it('Example 1', function (){
        // launching Url URL
        cy.visit("https://example.cypress.io/")
        // identifying element
        cy.get('h1').should('have.text', 'Kitchen Sink')
        
        cy.get('h1').then(function(e){
        const t = e.text()
        // get in Console
        console.log(t)
        })
        // Console message
        console.log("Cypress Tutorial")
    })
})