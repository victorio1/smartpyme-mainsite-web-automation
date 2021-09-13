Feature: Suscription

    Scenario: Verify a new suscription passed
      Given I am at SmartPyme Main Site
      When I select the option Suscription Free 
      And I complete the information for Suscription
      And I select the option I want to suscribe
      Then I verify the text of email was send