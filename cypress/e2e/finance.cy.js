 //<reference types="cypress"/>
//Plano de testes
describe('devFinance', ()=>{
//Seguir um fluxo da aplicação
//Mapear os elementos
//Descrever as interações com cypress
//Adicionar as asserções(expect's) que forem necessárias

//suite de testes
//1 teste 
//before antes de todos os testes 
//antes de cada teste

beforeEach(()=>{
   cy.visit('https://dev-finance.netlify.app/')
});

it('Cadastrar entradas', () => {

    
    cy.get('#transaction .button ').click()
    cy.get('#description').type('Mesada')
    cy.get('[name=amount]').type('120')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()
    
});

it('Cadastrar saída ', () => {
    
   
    cy.get('#transaction .button ').click()
    cy.get('#description').type('corte de cabelo')
    cy.get('[name=amount]').type('-20')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()
   


});
    
it('Remover entradas e saídas', () => {

    const entrada = 'mesada'
    const saida = 'corte de cabelo'

    cy.get('#transaction .button ').click()
    cy.get('#description').type(entrada)
    cy.get('[name=amount]').type('120')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()

    cy.get('#transaction .button ').click()
    cy.get('#description').type(saída)
    cy.get('[name=amount]').type('-20')
    cy.get('[type=date]').type('2024-07-24')
    cy.get('button').contains('Salvar').click()


    cy.get('td.description').click().contains(entrada)
    .parent()
    .find('img[onclick*=remove]')
    .click()

    cy.get('td.description').click().contains(saída)
    .parent()
    .find('img[onclick*=remove]')
    .click()


});


});