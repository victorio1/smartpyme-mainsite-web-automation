import suscriptionSendLocators from "../locators/suscriptionsendLocators"

const suscriptionsendlocators = new suscriptionSendLocators

class suscriptionSendPage {
 
    getMessageEmailSendLabel(){
        return cy.get(suscriptionsendlocators.messageEmailSendLabel)
    }
    
}

export default suscriptionSendPage