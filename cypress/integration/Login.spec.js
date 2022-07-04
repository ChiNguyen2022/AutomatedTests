import { loginPage } from '../pages/Login'
import { welcomePage } from '../pages/Welcome'


describe('Login page', () => {    
   
    const userLogin = Cypress.env('testUser')
    const passLogin = Cypress.env('testPass')
    const errorMsg = 'The inputted email or password is not correct.'
    const successMsg = 'You have logged-in successfully!'

    beforeEach(() => {
        loginPage.visit()
    })

    it(` Verify that a user cannot login when entering a wrong email address or password`, () => {
        // Login with a wrong email address or password
        loginPage.login("abc@gmail.com", passLogin)

        //VP: Verify The system displays an error message: “The inputted email or password is not correct.” 
        loginPage.lblPasswordError.should('have.text', errorMsg)
    })

    it(` Verify that a user can login successfully`, () => {
        // Login with existing email and correct password
        loginPage.login(userLogin, passLogin)

        //VP: Verify The page Welcome will display and the message: “You have logged-in successfully!”
        welcomePage.lblLoggedinSuccessfully.should('have.text', successMsg)
    })

})