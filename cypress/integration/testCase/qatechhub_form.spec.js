/// <reference types="cypress" />

describe("Form Element Test Suite", ()=>{

    it("Form fill with correct values", ()=>{

        cy.visit('https://test.qatechhub.com/form-elements/')

        cy.title().should("equal", "Form Elements")

        //Basic syntax of css 
        //Identifying using any attribute in an html tag
        cy.get("input[name='wpforms[fields][1][first]']")

        //By using Id
        cy.get("#wpforms-49-field_1")

        //Using Class Name 
        cy.get(".wpforms-field-name-first.wpforms-field-required").type("Saurabh")

        cy.get("#wpforms-49-field_1-last").type("Dhingra")

        cy.get("[type='email']").type("saurabh@qatechhub.com")

        cy.get("#wpforms-49-field_4").type("47656348")

        cy.get("[value='Female']").check()

        cy.get("#wpforms-49-field_5").select("Cypress")

        cy.contains("Submit").click()



    })
})