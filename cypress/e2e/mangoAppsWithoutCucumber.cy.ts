import { page } from '../pom'

describe('Mango apps basic flow', function() {
    before(function() {
        cy.log('login step')
        cy.visit('/');
        cy.login();
    });

    it('Share an update', function() {
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
        page.postSuccessMessage()
            .should('be.visible')
            .and('contain.text', 'Message posted successfully to Assignment 1');
    });
});
