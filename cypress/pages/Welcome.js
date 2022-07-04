class WelcomePage {
    get lblLoggedinSuccessfully() {
        return cy.get('#lblLoggedinSuccessfully')
    }
}

export const welcomePage = new WelcomePage()
