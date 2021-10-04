describe('Landing', () => {
    before('Open site', () => {
        cy.visit('https://stage.retargetapp.com')
    })
    it('NEW MODAL Shopify', () => {
        cy.get('.c-nav > .get-started').click()
        // cy.get('#get-started-modal--new').should('have.attr', 'style', 'visibility: visible;')
        cy.get('#shopify-btn-new').click()
        cy.get('.gs-modal-url-form__input.gs-modal-url-form__input-new').type('test', {force: true, delay: 700})
        cy.get('.gs-modal-url-form.gs-modal-url-form--new button')
        cy.get('#close-btn-new').click()
    })

    it('OLD MODAL Shopify', () => {
        cy.get('.c-nav > .get-started').click()
        // cy.get('#get-started-modal').should('have.attr', 'style', 'visibility: visible;')
        cy.get('#shopify-btn').click()
        cy.get('#get-started-modal-choose-shop .gs-modal-url-form__input').type('test', {force: true, delay: 700})
        cy.contains('.gs-modal-url-form__btn', 'Install')
        cy.get('#close-btn').click()
    })
});