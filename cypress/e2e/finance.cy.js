
//Plano de testes
describe('devFinance', ()=>{
//Seguir um fluxo da aplicação
//Mapear os elementos
//Descrever as interações com cypress
//Adicionar as asserções(expect's) que forem necessárias

//suite de testes

it('Cadastrar entradas', () => {

    cy.visit('https://dev-finance.netlify.app/')
    cy.get('#transaction .button ').click()
    cy.get('#description').type('Mesada')
    cy.get('[name=amount]').type('120')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()

});

it('Cadastrar saída ', () => {
    
    cy.visit('https://dev-finance.netlify.app/')
    cy.get('#transaction .button ').click()
    cy.get('#description').type('corte de cabelo')
    cy.get('[name=amount]').type('-120')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()
    


});
    





}) 