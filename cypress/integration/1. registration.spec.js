

describe('Registration and profile creation', ()=> {

    it('Register a new user and set a shipping address', () => {

        cy.visit('https://frontend.nopcommerce.com/')
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('.ico-login')
          .click().wait(1500)
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('button[type="button"]').contains('Register')
          .click().wait(1500)
        
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('input[id="gender-male"]')
          .click()
          
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('input[id="FirstName"]')
          .click()
          .type('John')
        
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('input[id="LastName"]')
          .click()
          .type('Doe')
        
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('select[name="DateOfBirthDay"]')
          .select('3')
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('select[name="DateOfBirthMonth"]')
          .select('February')
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('select[name="DateOfBirthYear"]')
          .select('2000')
    
        cy.fixture('loginDetails.json').then(user => {
          cy.switchToIframe('[class="adaptive-frame-wrapper"]')
            .find('input[id="Email"]')
            .click()
            .type(user.email)
            .should('have.value', user.email) 
        })
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('input[id="Company"]')
          .click()
          .type('Hema')
        
        cy.fixture('loginDetails.json').then(user => {
          cy.switchToIframe('[class="adaptive-frame-wrapper"]')
            .find('input[id="Password"]')
            .click()
            .type(user.password)
    
          cy.switchToIframe('[class="adaptive-frame-wrapper"]')
            .find('input[id="ConfirmPassword"]')
            .click()
            .type(user.password)
        })
    
        cy.switchToIframe('[class="adaptive-frame-wrapper"]')
          .find('button[id="register-button"]')
          .click()
          
      })


})