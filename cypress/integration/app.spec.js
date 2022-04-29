describe("QA Assessment", () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("does nothing", () => {
        cy.defaultLogging('nothing')
    })

    it("should Click on radio button 3 and validate that only 1 radio button is checked", () => {
        cy.get("#radio-btn-example").find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons)
                .eq(2)
                .check()
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')

            cy.wrap(radioButtons)
                .eq(1)
                .should('not.be.checked')
        })
    })

    it("should Click on Radio button 2 and validate that button 2 is the only checked button", () => {
        cy.get("#radio-btn-example").find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons)
                .eq(1)
                .check()
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')

            cy.wrap(radioButtons)
                .eq(2)
                .should('not.be.checked')
        })
    })

    it("should Type in the field South and select South Africa from the list of options", () => {
        // cy.get("#autocomplete").type('South').get("#ui-id-1").find('li:last-child')

        cy.get("#autocomplete")
            .type('South')
            .get("#ui-id-1")
            .find('li')
            .contains('South Africa')
            .click()
    })

    it("should Clear the field and type Republic and select the first option listed", () => {
        cy.get("#autocomplete")
            .clear()
            .type('Republic')
            .get("#ui-id-1")
            .find('li:first-child')
            .click()
    })

    it("should Check all the checkboxes and validate that they are all checked", () => {
        cy.get("#checkbox-example").get('[type="checkbox"]').check()

        cy.get("#checkbox-example").find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes)
                .eq(1)
                .should('be.checked')

            cy.wrap(checkBoxes)
                .eq(0)
                .should('be.checked')

            cy.wrap(checkBoxes)
                .eq(2)
                .should('be.checked')
        })
    })

    it("should Uncheck the first checkbox and validate that the other two remain checked", () => {

        cy.get("#checkbox-example").get('[type="checkbox"]').check()
        cy.get("#checkbox-example").find('[type="checkbox"]').eq(0).uncheck()

        cy.get("#checkbox-example").find('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes)
                .eq(0)
                .should('not.be.checked')

            cy.wrap(checkBoxes)
                .eq(1)
                .should('be.checked')

            cy.wrap(checkBoxes)
                .eq(2)
                .should('be.checked')
        })

    })

    it("should Click on the hide button and validate that the element is hidden", () => {
        cy.get("#hide-textbox")
            .click()
            .get("#displayed-text")
            .should("be.hidden")
    })

    it("should Click on the show button and validate that the hidden element is shown", () => {
        cy.get("#show-textbox")
            .click()
            .get("#displayed-text")
            .should("be.visible")
    })

    it("should Validate that the Amount for  Joe Postman from Chennai has an amount of 46", () => {
        cy.get(".tableFixHead")
            .find("#product tbody")
            .contains("tr", "Joe")
            .find("td:last-child")
            .should("contain", 46)
    })

    it("should Validate that the total amount collected is 296", () => {

        const expected = 296;
        cy.get(".tableFixHead")
            .find("#product tbody td:last-child")
            .each(($element) => {
               let total = total + +($element.text())
            })


    })

    it("should Interact with any element within the iframe", () => {

        cy.get("#courses-iframe")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap)
            .find(".onoffswitch4")
            .click()

    })

    it("should Validate that the page has an iframe", () => {
        cy.get("#courses-iframe")
            .its("0.contentDocument.body")
            .should("be.visible")
    })
})

