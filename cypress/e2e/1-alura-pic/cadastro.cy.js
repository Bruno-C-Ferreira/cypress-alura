import { faker } from '@faker-js/faker';

describe('Cadastro de usuários Alurapic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagens validação', () => {
        cy.contains('a', 'Register now').click(); //Indica o tipo de elemento da página que possui o texto do 2º parametro
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        //Indica o tipo de elemento da página que possui o texto do 2º parametro e o método should('be.visible') faz o assert se o elemento esta visivel
    })

    it('verifica mensagem de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('bruno');//seleciona o elemento HTML e o atributo presente nele formcontrolname passando o valor email
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de que o nome do usuário deve estar em minúsculo', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('TESTE');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('cadastrar novo usuário', () => {
        cy.cadastrarUsuario(
            faker.internet.userName().toString().toLowerCase() + '@test.com',
            faker.name.firstName().toString() + ' ' + faker.name.lastName().toString(),
            'user' + faker.name.firstName().toLowerCase().toString(),
            faker.random.numeric(10).toString());
    })

    const usuários = require('../../fixtures/usuarios.json');//Declarar uma constante que irá receber a referencia ao arquivo de usuarios.json para poder utilizar esses dados
    usuários.forEach(usuario => { //loop que irá iterar cada objeto presente na lista do arquivo usuarios.json
        it(`registrar novo usuário ${usuario.fullName} `, () => { //Setar o nome do caso de teste de acordo com o nome presente no atributo fullName da variavel usuario atual do loop
            cy.cadastrarUsuario(
                usuario.email,
                usuario.fullName,
                usuario.userName,
                usuario.password);
        })
    });

})