import suscriptionPage from "../pages/suscriptionPage"

const suscriptionpage = new suscriptionPage

class suscriptionActions{

    writeFullName(fullName){
        suscriptionpage.getFullNameTextBox().type(fullName)
    }

    writeEmail(email){
        suscriptionpage.getEmailTextBox().type(email)
    }

    writePhone(phone){
        suscriptionpage.getPhoneTextBox().type(phone)
    }

    clickTermsAndConditions(){
        suscriptionpage.getTermsAndConditionsCheckBox().click()
    }

    clickWantsToSuscribe(){
        suscriptionpage.getWantSuscribeButton().click()
    }

}

export default suscriptionActions