export const page = {
    usernameInputField: () => cy.get('#user_id'),
    passwordInputField: () => cy.get('#password'),
    loginButton: () => cy.get('.loginBtn'),
    topNavMenu: () => cy.get('.dropdown-toggle.topnav-menu'),
    updateMenuItem: () => cy.get('.update_mssg_dialog'),
    teamInputField: () => cy.get('#token-input-myTeams'),
    teamInputFieldDropdownItem: () => cy.get('[class*="token-input-dropdown-item"]'),
    yourUpdateInputField: () => cy.get('#project_status_update_team'),
    attachButton: () => cy.get('.attachLinkonDialog'),
    addFilesButton : () => cy.get('#fileupload'),
    fileUploadCompleteCheckmark: () => cy.get('.file-upload-complete'),
    doneButton: () => cy.get('#btn_file_upload'),
    attachedFileTag: () => cy.get('.attachment_wrapper'),
    shareButton: () => cy.get('.tweet-submit'),
    postSuccessMessage: () => cy.get('#postSuccessMsg')
}