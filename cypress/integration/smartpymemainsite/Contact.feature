Feature: Contact

   Scenario: Verify Register a New Contact Passed
      Given I am at SmartPyme Main Site
      When I write First Name and Last Name
      And I write Phone Number and Email
      And I write a comment or message to contact
      And I select the option Send