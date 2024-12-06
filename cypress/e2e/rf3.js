describe("Validação do requisito RF3", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar o envio do formulário de "Entre em contato" com inputs inválidos', () => {
        cy.scrollToContact()
        cy.sendContactForm(" "," "," "," ", "falha")
    })

    it('Validar o envio do formulário de "Entre em contato" com inputs válidos', () => {
        cy.scrollToContact()
        cy.sendContactForm("Jeferson Luis","jeferson.dev@gmail.com","42999619817","Testando automação", "sucesso")
    })

    it('Validar o envio do formulário de "Teste grátis" com inputs válidos', () => {
        cy.clickFreeTrial()
        cy.sendFreeTrialForm("Jeferson Indejejcza","jeferson.dev@gmail.com","42999619817")
    })
})