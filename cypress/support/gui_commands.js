Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});//propriedade log: false para que não sejam exibidos os dados sensíveis na execução dos testes
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('cadastrarUsuario', (email, fullName, userName, password) => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.wait(1500);
    cy.contains('button', 'Register').click();
})