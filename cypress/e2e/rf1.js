describe('Validação do requisito RF1', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar a navegação do menu Home', () => {
        cy.selectMenu('home')
    })

    it('Validar a navegação do menu RIS', () => {
        cy.selectMenu('ris')
    })

    it('Validar a navegação do menu PACS', () => {
        cy.selectMenu('pacs')
    })

    it('Validar a navegação do menu Portal', () => {
        cy.selectMenu('portal')
    })

    it('Validar a navegação do menu Planos', () => {
        cy.selectMenu('plans')
    })

    it('Validar a navegação do menu Contato', () => {
        cy.selectMenu('contact')
    })

    it('Validar a navegação para a opção Testar Grátis', () => {
        cy.clickFreeTrial()
    })
})