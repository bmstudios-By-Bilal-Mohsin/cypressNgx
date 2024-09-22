/// <reference types="cypress" />

describe('First Test Suite', () => {

    it('first Test', () => {

        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tag name
        cy.get('input')

        cy.get('#inputEmail1')

        cy.contains('Sign in').click()

    })

    it('first Test', () => {

        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('[status="warning"]','Sign in').scrollIntoView().click()
        cy.contains('nb-card', 'Horizontal form').find('button')

        // Cypres chains

        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
    })

    it('save subject of command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

    
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')

        // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')

        // Aliases
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        cy.contains('nb-card', 'Using the Grid').then( usingTheGridFor => {
            cy.wrap(usingTheGridFor).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridFor).find('[for="inputPassword2"]').should('contain', 'Password')

        })
     })


    it('save subject of command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // 2
        cy.get('[for="exampleInputEmail1"]').then( label => {

            const labelText = label.text()
            expect(labelText).to.equal('Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then( classValue => {
            expect(classValue).to.equal('label')
        })

        cy.get('[for="exampleInputEmail1"]').type('abc@gmail.com')
    
    })

    it('Radio Button Tests', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radio => {
            cy.wrap(radio).eq(0).check({force: true}).should('be.checked')
            cy.wait(2)
            cy.wrap(radio).eq(1).check({force: true}).should('be.checked')
            cy.wrap(radio).eq(0).should('not.be.checked')
        })
        
        })

    it.only('Radio Button Tests', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        let date = new Date()
        date.setDate(date.getDate() +50)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
        let futureYear = date.getFullYear()
        let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`


            cy.contains('nb-card', 'Common Datepicker').find('input').then( dateinput => {
                cy.wrap(dateinput).click()

                function selectDayFromCalendar(){
                    
                    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                    
                        //nov 2024
                        if(!dateAttribute.includes(futureMonth) && !dateAttribute.includes(futureYear)){
                            cy.get('nb-calendar-pageable-navigation.ng-star-inserted > :nth-child(3)').click()
                            selectDayFromCalendar()
                        } else {
                            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                        }
                    })
                }
                selectDayFromCalendar()
                // cy.wrap(dateinput).invoke('prop', 'value').should('contain', dateToAssert)
                // cy.wrap(dateinput).should('have.value', dateToAssert )
            
    })
    })
})