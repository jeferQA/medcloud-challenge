const elHome = require('../page_elements/homeElements').elements

Cypress.Commands.add('selectMenu', (menu) => {
    switch(menu){
        case "home":
            cy.get(elHome.menu.headerHome).should('be.visible').click()
            cy.get(elHome.titleHomeSection).first().should('be.visible')
            break
        case "ris":
            cy.get(elHome.menu.headerRis).should('be.visible').click()
            cy.get(elHome.titleRisSection).first().should('be.visible')
            break
        case "pacs":
            cy.get(elHome.menu.headerPacs).should('be.visible').click()
            cy.get(elHome.titlePacsSection).first().should('be.visible')
            break
        case "portal":
            cy.get(elHome.menu.headerPortal).should('be.visible').click()
            cy.get(elHome.titlePortalSection).first().should('be.visible')
            break
        case "plans":
            cy.get(elHome.menu.headerPlans).should('be.visible').click()
            cy.get(elHome.titlePlansSection).first().should('be.visible')
            break
        case "contact":
            cy.get(elHome.menu.headerContact).should('be.visible').click()
            cy.get(elHome.titleContactSection).first().should('be.visible')
            break
    }
        
})

Cypress.Commands.add('clickFreeTrial', () => {
    cy.get('button').contains('Testar grátis').first().click()
    cy.get(elHome.freeTrial.modalFreeTrial).should('be.visible')
})

Cypress.Commands.add('scrollToFooter', () => {
    cy.get(elHome.footer.footerSection).scrollIntoView()
})

Cypress.Commands.add('validateSocialNetwork', (socialNetwork, url) => {
    switch(socialNetwork){
        case "spotify":
            cy.get(elHome.footer.listSocialNetwork).eq(0).should('have.attr', 'href', url)
            break
        case "instagram":
            cy.get(elHome.footer.listSocialNetwork).eq(1).should('have.attr', 'href', url)
            break
        case "facebook":
            cy.get(elHome.footer.listSocialNetwork).eq(2).should('have.attr', 'href', url)
            break
        case "twitter":
            cy.get(elHome.footer.listSocialNetwork).eq(3).should('have.attr', 'href', url)
            break
        case "youtube":
            cy.get(elHome.footer.listSocialNetwork).eq(4).should('have.attr', 'href', url)
            break
        case "linkedin":
            cy.get(elHome.footer.listSocialNetwork).eq(5).should('have.attr', 'href', url)
            break
    }
})

Cypress.Commands.add('validateInstitutionalLinks', (page, url) => {
    switch(page){
        case 'sobre':
            cy.get(elHome.footer.aboutLink).should('have.attr', 'href', url)
            break
        case 'carreiras':
            cy.get(elHome.footer.careersLink).should('have.attr', 'href', url)
            break
        case 'politicas de privacidade':
            cy.get(elHome.footer.privacyPoliticsLink).should('have.attr', 'href', url)
            break
        case 'termos de uso':
            cy.get(elHome.footer.termsOfUseLink).should('have.attr', 'href', url)
            break
    }
})

Cypress.Commands.add('validateAppLinks', (app, url) => {
    switch(app){
        case 'app store':
            cy.get(elHome.footer.appStoreLink).should('have.attr', 'href', url)
            break
        case 'google play':
            cy.get(elHome.footer.googlePlayStoreLink).should('have.attr', 'href', url)
            break
    }
})

Cypress.Commands.add('scrollToContact', () => {
    cy.get(elHome.titleContactSection).first().scrollIntoView()
})

Cypress.Commands.add('sendContactForm', (name, email, phone, message, typeMessage) => {
    cy.get(elHome.contactForms.inputName).focus().type(name)
    cy.get(elHome.contactForms.inputEmail).focus().type(email)
    cy.get(elHome.contactForms.inputPhone).focus().type(phone)
    cy.get(elHome.contactForms.inputMessage).focus().type(message)
    cy.get(elHome.contactForms.buttonSubmit).last().click()

    switch(typeMessage){
        case 'falha':
            cy.get(elHome.contactForms.returnMessage).should('have.text', 'Erro ao enviar mensagem.')
            break
        case 'sucesso':
            cy.get(elHome.contactForms.returnMessage).should('have.text', 'Mensagem enviada com sucesso.')
            break

    }
})

Cypress.Commands.add('sendFreeTrialForm', (name, email, phone) => {
    cy.get(elHome.freeTrialForms.inputName).focus().type(name)
    cy.get(elHome.freeTrialForms.inputEmail).focus().type(email)
    cy.get(elHome.freeTrialForms.inputPhone).focus().type(phone)
    cy.get(elHome.freeTrialForms.buttonSubmit).first().click()

    cy.get(elHome.freeTrialForms.returnMessage).should('have.text', 'Trial solicitado com sucesso!')

})