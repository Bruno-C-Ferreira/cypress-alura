import { faker } from '@faker-js/faker';
import { userName } from 'Faker/lib/internet';

describe('Login de usuário Alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
        // cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        //     statusCode: 400
        // }).as('stubPost');//comando intercept para interceptar o método e rota escolhido e adicionar um stub escolhido de status code 400 no retorno da request 
    })

    it('fazer login de usuario inválido 400', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        // cy.wait('@stubPost');//é esperado que o stub seja enviado(status code 400) na response da request https://apialurapic.herokuapp.com/user/login que é a request de login 
    })

    it('fazer login de usuario válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password')); //Método foi setado no arquivo commands e e2e e é feita apenas a chamada do comando passando os parâmetros de login
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario inválido', () => {
        cy.login(faker.internet.userName().toString(), faker.random.numeric(3));
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })// Valida mensagem de alerta contida na modal de alerta que é exibida no navegador
    })

})