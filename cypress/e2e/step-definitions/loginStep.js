import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/LoginPage'

const Login = new LoginPage()

Given('I opened the applicaion',function()
{
    Login.visit()        
})

When('I give username {string} and password {string} details',function(username,password)
{
        Login.fillEmail().type(username);
        Login.fillPassword().type(password);
})

Then('Click on the login button and HomePage will be displayed',function()
{
       Login.submit().click()  
}
)
