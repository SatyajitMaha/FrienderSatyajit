Feature: End to End Validation

    Scenario Outline: Scenario Outline name: Friender login validation
          Given I opened the applicaion
          When  I give username '<Email>' and password '<password>' details
          Then  Click on the login button and HomePage will be displayed

    Examples: 
         | Email                  | password   | 
         | testuser85@friender.in | !Aworker2# | 
