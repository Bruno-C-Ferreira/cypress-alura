import { faker } from '@faker-js/faker';

describe('Login de usuário Alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('fazer login de usuario válido 1', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario válido 2', () => {
        cy.login('flavio', '123'); //Método foi setado no arquivo commands e e2e e é feita apenas a chamada do comando passando os parâmetros de login
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario inválido', () => {
        cy.login(faker.internet.userName().toString(), faker.random.numeric(3));
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })// Valida mensagem de alerta contida na modal de alerta que é exibida no navegador
    })

})