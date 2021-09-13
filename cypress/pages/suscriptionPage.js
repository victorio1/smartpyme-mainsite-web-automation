import suscriptionLocators from "../locators/suscriptionLocators"

const suscriptionlocators = new suscriptionLocators

class suscriptionPage {

    getFullNameTextBox(){
        return cy.get(suscriptionlocators.fullNameTextBox)
    }

    getEmailTextBox(){
        return cy.get(suscriptionlocators.emailTextBox)
    }

    getPhoneTextBox(){
        return cy.get(suscriptionlocators.phoneTextBox)
    }

    getTermsAndConditionsCheckBox(){
        return cy.get(suscriptionlocators.termsAndConditionsCheckBox)
    }

    getWantSuscribeButton(){
        return cy.get(suscriptionlocators.wantSuscribeButton)
    }
    
}

export default suscriptionPage