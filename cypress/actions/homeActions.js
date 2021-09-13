import homePage from "../pages/homePage";

const homepage = new homePage

class homeActions{

    clickNewSuscription(){
        return homepage.getSuscriptionRegisterButton().click()
    }

    writeFirstLastName(firstLastName){
        return homepage.getFirstLastNameTextBox().type(firstLastName)
    }

    writePhone(phone){
        return homepage.getPhoneTextBox().type(phone)
    }

    writeEmail(email){
        return homepage.getEmailTextBox().type(email)
    }

    writeComment(comment){
        return homepage.getCommentTextBox().type(comment)
    }

    clickSendContact(){
        return homepage.getSendContactButton().click()
    }    

}

export default homeActions