import 'cypress-file-upload';
import { page } from '../pom'

Cypress.Commands.add('login', () => {
    page.usernameInputField()
        .type(Cypress.env('username'))
    page.passwordInputField()
        .type(Cypress.env('password'))
    page.loginButton()
        .click()
})
