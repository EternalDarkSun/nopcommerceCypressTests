

let orderNumber;

describe('Order Placement', () => {

  it('Create a new Order', () => {
    
    cy.visit('https://frontend.nopcommerce.com/')

    //find an search field and search for some product
    cy.log("*****Searching for the product*****");
    cy.findIFrameElement('.search-box-text.ui-autocomplete-input')
      .click()
      .type('HTC One M8 Android L 5.0 Lollipop')
      .should('have.value', 'HTC One M8 Android L 5.0 Lollipop') 
      
    // click on the searh button
    cy.findIFrameElement('.button-1.search-box-button')
      .click()
      .wait(1500)

    // click on the "add to cart" button
    cy.log("*****Adding item to the cart*****")
      .wait(2000)
    cy.findIFrameElement('.product-box-add-to-cart-button')
      .click()
      .wait(2000)
    
    // click on the "Shopping cart" link in the footer
    cy.log("*****Adding item to the cart*****")
    cy.findIFrameElement('.footer-upper')
      .contains('Shopping cart')
      .click().wait(2000)

    // click on the "Terms and conditions" checkbox
    cy.log("*****Accepting terms and conditions*****")
      .wait(2000)
    cy.findIFrameElement('input[type="checkbox"]')
      .eq(1)
      .click()

    // click on the "Checkout" button
    cy.log("*****Clicking the checkout button*****")
    cy.findIFrameElement('button[id="checkout"]')
      .click().wait(3000)

    // logging in
    cy.log("*****Entering email and password, and clicking SUBMIT*****");

    //using data from the fixures
    cy.fixture('loginDetails.json').then(user => {
      cy.findIFrameElement('input[id="Email"]')
        .click()
        .type(user.email)
        .should('have.value', user.email) 

      cy.findIFrameElement('input[id="Password"]')
        .click()
        .type(user.password)
        .should('have.value', user.password) 
    })


    cy.findIFrameElement('.button-1.login-button')
      .click()
      .wait(2000)

    // again confirming terms and conditions
    cy.log("*****Accepting terms and conditions again*****")
      .wait(1500)
    cy.findIFrameElement('input[type="checkbox"]')
      .eq(1)
      .click()
    

    cy.log("*****Clicking the checkout button*****");
    cy.findIFrameElement('button[id="checkout"]')
      .click()
      .wait(4000)

    // go through the Checkout steps 
    cy.log("*****Going through the Checkout steps*****")
    // country selection
    cy.switchToIframe('[class="adaptive-frame-wrapper"]')
      .wait(3000)
      .find('[data-trigger="country-select"]') 
      .select(2) 

    // entering city
    cy.findIFrameElement('input[id="BillingNewAddress_City"]')
      .click()
      .type('New York')
    
    // entering street name
    cy.findIFrameElement('input[id="BillingNewAddress_Address1"]')
      .click()
      .type('Random street')

    // entering zip code
    cy.findIFrameElement('input[id="BillingNewAddress_ZipPostalCode"]')
      .click()
      .type('1000')

    // entering phone number
    cy.findIFrameElement('input[id="BillingNewAddress_PhoneNumber"]')
      .click()
      .type('090')

    // going to the next step(s)
    cy.findIFrameElement('.button-1.new-address-next-step-button')
      .first()
      .click().wait(1500)
      
    cy.findIFrameElement('.button-1.shipping-method-next-step-button')
      .first()
      .click().wait(1500)

    cy.findIFrameElement('.button-1.payment-method-next-step-button')
      .first()
      .click().wait(1500)
    
    cy.findIFrameElement('.button-1.payment-info-next-step-button')
      .first()
      .click().wait(1500)

    // finishing the Order
    cy.findIFrameElement('.button-1.confirm-order-next-step-button')
      .first()
      .click()
      
  })
})