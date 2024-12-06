describe('Validação do requisito RF2', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.scrollToFooter()
    })

    it('No footer, validar o acesso ao Spotify da Medcloud', () =>{
        cy.validateSocialNetwork('spotify', 'https://open.spotify.com/show/4IK3IeDsKHbflXLQ6oy20W')
    })

    it('No footer, validar o acesso ao Instagram da Medcloud', () =>{
        cy.validateSocialNetwork('instagram', 'https://www.instagram.com/medcloudbr/')
    })

    it('No footer, validar o acesso ao Facebook da Medcloud', () =>{
        cy.validateSocialNetwork('facebook', 'https://www.facebook.com/medcloudbr')
    })

    it('No footer, validar o acesso ao Twitter da Medcloud', () =>{
        cy.validateSocialNetwork('twitter', 'https://x.com/medcloudbr')
    })

    it('No footer, validar o acesso ao Youtube da Medcloud', () =>{
        cy.validateSocialNetwork('youtube', 'https://www.youtube.com/channel/UCQZCk0wyl9vQLDt84d1Sr1w')
    })

    it('No footer, validar o acesso ao Linkedin da Medcloud', () =>{
        cy.validateSocialNetwork('linkedin', 'https://www.linkedin.com/company/medcloud/')
    })

    it('No footer, validar o acesso ao menu institucional "Sobre"', () => {
        cy.validateInstitutionalLinks('sobre', 'about.html')
    })

    it('No footer, validar o acesso ao menu institucional "Carreiras"', () => {
        cy.validateInstitutionalLinks('carreiras', 'careers.html')
    })

    it('No footer, validar o acesso ao menu institucional "Politicas de privacidade"', () => {
        cy.validateInstitutionalLinks('politicas de privacidade', '/pdfs/Medcloud-Privacy-Policy.pdf')
    })

    it('No footer, validar o acesso ao menu institucional "Termos de uso"', () => {
        cy.validateInstitutionalLinks('termos de uso', '/pdfs/Medcloud-Terms-Use.pdf')
    })

    it('No footer, validar a opção de download do app Medcloud na App Store', () => {
        cy.validateAppLinks('app store', 'https://apps.apple.com/br/app/medcloud-2-0/id1486223140')
    })

    it('No footer, validar a opção de download do app Medcloud na Play Store', () => {
        cy.validateAppLinks('google play', 'https://play.google.com/store/apps/details?id=co.medcloud.android')
    })
})