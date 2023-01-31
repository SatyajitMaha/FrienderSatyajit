

class LoginPage
{
    constructor()
    {
        this.email= "input[placeholder='Enter Email']";
        this.password="input[placeholder='Enter Password']";
        this.button ="button[class=btn-primary]";
    }
    
    visit()
    {
        cy.visit('dev.friender.io')
    }

    fillEmail(value)
    {
   
     return cy.get(this.email);
    }

    fillPassword(value)
    {
      
      return  cy.get(this.password)   
    }

    submit()
    {
      
      return cy.get(this.button)
    }

}  
    export default LoginPage