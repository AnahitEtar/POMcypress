class HomePage {

    elements = {
    usernameField:() => cy.get('#user-name'),
    passwordField:() => cy.get('#password'),
    loginButton: () => cy.get('#login-button')
    }

    typeUsername(username) {
    this.elements.usernameField().type(username);
    }

    typePassword(password) {
    this.elements.passwordField().type(password);
    }

    clickLogin() {
    this.elements.loginButton().click();
    }
}

module.exports= new HomePage();
