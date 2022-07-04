class LoginPage {

    get txtEmailField() {
        return cy.get('#txtEmail')
    }

    get lblEmailError() {
        return cy.get('#lblEmailErr')
    }

    get txtPasswordField() {
        return cy.get('#txtPassword')
    }

    get lblPasswordError() {
        return cy.get('#lblPasswordErr')
    }

    get btnLogin() {
        return cy.get('#btnLogin')
    }

    visit() {
        cy.visit('/')
        return this
    }

    login(email, password) {
        this.txtEmailField.click().enter(email);
        this.txtPasswordField.click().enter(password);
        this.btnLogin.click();
    }
}

export const loginPage = new LoginPage()
