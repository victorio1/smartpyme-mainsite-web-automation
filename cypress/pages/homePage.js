/// <reference types="cypress-xpath"/>
import homeLocators from '../locators/homeLocators'

const homelocators = new homeLocators

class HomePage {

    getSuscriptionRegisterButton(){
        return cy.xpath(homelocators.suscriptionRegisterButton)
    }

    getFirstLastNameTextBox(){
        return cy.get(homelocators.firstAndLastNameTextBox)
    }

    getPhoneTextBox(){
        return cy.get(homelocators.phoneTextBox)
    }

    getEmailTextBox(){
        return cy.get(homelocators.emailTextBox)
    }

    getCommentTextBox(){
        return cy.get(homelocators.CommentTextBox)
    }

    getSendContactButton(){
        return cy.xpath(homelocators.SendContactButton)
    }

}

export default HomePage