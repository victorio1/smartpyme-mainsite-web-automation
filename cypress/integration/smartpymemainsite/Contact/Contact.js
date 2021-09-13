/// <reference types="Cypress"/>

import homeActions from "../../../actions/homeActions";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor";

const homeactions = new homeActions()

Given('I am at SmartPyme Main Site', () => {
    cy.visit('https://smartpyme-stg.azurewebsites.net/')
})

When('I write First Name and Last Name', () => {
    homeactions.writeFirstLastName('Eduardo Oscar Gomez Victorio')
})

And('I write Phone Number and Email', () => {
    homeactions.writePhone('902292248')
    homeactions.writeEmail('testautomation123@gmail.com')
})

And('I write a comment or message to contact', () => {
    homeactions.writeComment('Automation Test')
})

And('I select the option Send', () => {
    homeactions.clickSendContact()
})

