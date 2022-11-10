/// <reference types="cypress"/>

describe('Criando cenario de teste para o site github', () => {
  
  it('Caso de teste: login sem senha', ()=>{
    cy.visit('https://www.github.com')
    cy.get('.js-details-target > .Button-content > .Button-label').click()
    cy.get('.mr-lg-3 > .HeaderMenu-link').click()
    cy.get('#login_field').type('carl.betsa@ges.inatel.br')
    cy.get('.btn').click()
    cy.get('.js-flash-alert').should('contain.text', 'Incorrect username or password')
  })

  it('Caso de teste: buscar repositorio de S206', ()=>{
    cy.visit('https://github.com/search')
    cy.get('.form-control').type('S206')
    cy.get('.btn').click()
    cy.get(':nth-child(1) > .mt-n1 > :nth-child(1) > .f4 > .v-align-middle').click()
    cy.get('.markdown-body > h1').should('contain.text', 'S206')
  })

  it('Caso de teste: verificando informações do professor Chris', ()=>{
    cy.visit('https://github.com/chrislima')
    cy.get('.p-org > div').should('have.text', 'Inatel')
    cy.get('.p-note > div').should('have.text', 'Professor at Inatel')
    cy.get('.p-label').should('have.text', 'Santa Rita do Sapucaí')
  })

  it('Caso de teste: verificando preço do git', ()=>{
    cy.visit('https://github.com')
    cy.get('.js-details-target > .Button-content > .Button-label').click()
    cy.get(':nth-child(4) > .HeaderMenu-link').click()
    cy.get(':nth-child(1) > .px-2 > .d-md-flex > .pt-4 > .js-yearly-cost > .mb-0 > .flex-lg-column > .d-flex > .js-computed-value').should('have.text', '0')
  })

  it('Caso de teste: verificando o about do repositorio de S206', ()=>{
    cy.visit('https://github.com/chrislima/s206')
    cy.get('.BorderGrid-cell > .f4').should('contain.text', 'Repositório da disciplina Qualidade de Software')
  })

  it('Caso de teste: verificando o meu about do repositorio de S206 é igual o do prof chris', ()=>{
    cy.visit('https://github.com/carlbetsa/s206-l1')
    cy.get('.BorderGrid-cell > .f4').should('contain.text', 'Repositório da disciplina Qualidade de Software')
  })
})