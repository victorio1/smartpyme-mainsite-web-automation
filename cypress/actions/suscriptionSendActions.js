import suscriptionSendPage from "../pages/suscriptionSendPage"

const suscriptionsendpage = new suscriptionSendPage

class suscriptionSendActions{

    verifyMessageEmailSend(text){
        suscriptionsendpage.getMessageEmailSendLabel().should('have.text',text)
    }

}

export default suscriptionSendActions