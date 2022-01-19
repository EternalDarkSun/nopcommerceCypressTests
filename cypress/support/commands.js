// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// -- This is a command for getting the iFrame, and using it's elements--
// Usit like this:
// cy.switchToIframe( Enter the iframe element here )
Cypress.Commands.add('switchToIframe', (iframe) => {
    return cy 
            .get(iframe)
            .children().first().its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
})

// -- This is a command for getting the element within the iFrame--
// Usit like this:
// cy.findIFrameElement( Enter the element's locator here )
Cypress.Commands.add('findIFrameElement', (locator) => {
    return cy 
            .get('[class="adaptive-frame-wrapper"]')
            .children().first().its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find(locator)
})

