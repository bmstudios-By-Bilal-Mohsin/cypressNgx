function selectGroupMenuItem(GroupName) {
    
    cy.contains('a', GroupName).then( menu => {
        cy.wrap(menu).find('[class="expand-state"] g g').invoke('attr', 'data-name').then( attr => {
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{

    formLayoutsPage(){
        
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage() {

        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }
}
export const navigateTo = new NavigationPage()