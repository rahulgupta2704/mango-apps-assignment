import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { page } from '../../pom';

Given('I am logged in', () => {
    cy.visit('/');
    cy.login();
});

When('I share an update', () => {
    page.topNavMenu()
        .click();
    page.updateMenuItem()
        .click();
    page.teamInputField()
        .type('Assignment 1')
    page.teamInputFieldDropdownItem()
        .contains('Assignment 1')
        .click();
    page.yourUpdateInputField()
        .type('This is a test update');
    page.attachButton()
        .click();
    page.addFilesButton()
        .attachFile('uploads/sample_pdf.pdf');
    page.fileUploadCompleteCheckmark()
        .should('be.visible');
    page.doneButton()
        .click();
    page.attachedFileTag()
        .should('be.visible')
        .and('have.text', 'sample_pdf.pdf');
    page.shareButton()
        .click();
});


Given('the update should get shared', () => {
    page.postSuccessMessage()
        .should('be.visible')
        .and('contain.text', 'Message posted successfully to Assignment 1');
});

