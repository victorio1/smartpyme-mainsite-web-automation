/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

import homeActions from "../../../actions/homeActions";
import suscriptionActions from "../../../actions/suscriptionActions";
import suscriptionSendActions from "../../../actions/suscriptionSendActions";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homeactions = new homeActions()
const suscriptionactions = new suscriptionActions()
const suscriptionsendactions = new suscriptionSendActions()

Given('I am at SmartPyme Main Site', () => {
    cy.visit('https://smartpyme-stg.azurewebsites.net/')
})

When('I select the option Suscription Free', () => {
    homeactions.clickNewSuscription()
})

And('I complete the information for Suscription',() => {
    suscriptionactions.writeFullName('EDUARDO OSCAR GOMEZ VICTORIO')
    suscriptionactions.writeEmail('evictorio.uni45@gmail.com')
    suscriptionactions.writePhone('902292248')
    suscriptionactions.clickTermsAndConditions()    
})

And('I select the option I want to suscribe',() => {
    suscriptionactions.clickWantsToSuscribe()
    cy.wait(20000)
})

Then('I verify the text of email was send', () => {
    suscriptionsendactions.verifyMessageEmailSend('EDUARDO, busca el correo electrónico de verificación en tu bandeja de entrada y haz clic en el vínculo que se muestra en el mensaje. Aparece un mensaje de confirmación en tu explorador')
})

